// NEW VERSION USING appsettings.json WITHOUT PROMPTS

using System;
using System.IO;
using System.Threading.Tasks;
using Amazon;
using Amazon.Runtime;
using Amazon.S3;
using Amazon.S3.Model;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;

namespace S3ConsoleApp
{
    class Program
    {
        static async Task Main(string[] args)
        {
            Console.OutputEncoding = System.Text.Encoding.UTF8;

            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false)
                .Build();

            var awsConfig = config.GetSection("AWS");

            var accessKey = awsConfig["AccessKey"];
            var secretKey = awsConfig["SecretKey"];
            var region = awsConfig["Region"];
            var bucket = awsConfig["BucketName"];

            var s3Service = S3Service.Create(accessKey, secretKey, region, bucket);
            var ui = new MenuUI(s3Service);
            await ui.RunAsync();
        }
    }

    public class MenuUI
    {
        private readonly S3Service _s3;
        public MenuUI(S3Service s3) => _s3 = s3;

        public async Task RunAsync()
        {
            while (true)
            {
                Console.Clear();
                Console.WriteLine("===== S3 Console App =====\n");
                Console.WriteLine("0 - Upload file to S3");
                Console.WriteLine("1 - List bucket files");
                Console.WriteLine("2 - Exit\n");
                Console.Write("Your choice: ");
                var key = Console.ReadKey(true).KeyChar;
                Console.WriteLine(key);

                switch (key)
                {
                    case '0': await ShowUploadUI(); break;
                    case '1': await ShowListUI(); break;
                    case '2': return;
                    default:
                        Console.WriteLine("Unknown option. Press any key...");
                        Console.ReadKey(true);
                        break;
                }
            }
        }

        private async Task ShowListUI()
        {
            Console.Clear();
            Console.WriteLine($"Bucket: {_s3.BucketName}\n");

            try
            {
                var items = await _s3.ListObjectsAsync();
                if (items.Count == 0)
                {
                    Console.WriteLine("(bucket is empty)");
                }
                else
                {
                    foreach (var it in items)
                        Console.WriteLine(it);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error listing objects: {ex.Message}");
            }

            Console.WriteLine("\nPress any key to return...");
            Console.ReadKey(true);
        }

        private async Task ShowUploadUI()
        {
            Console.Clear();
            Console.WriteLine("===== Upload new file =====\n");

            Console.Write("local path: ");
            var localPath = Console.ReadLine();

            Console.Write("remote path in bucket (e.g. folder/file.png): ");
            var remotePath = Console.ReadLine();

            if (string.IsNullOrWhiteSpace(remotePath))
            {
                Console.WriteLine("Remote path cannot be empty.");
                Console.ReadKey(true);
                return;
            }

            Console.WriteLine("\nUploading...");

            try
            {
                await _s3.UploadFileAsync(localPath, remotePath);
                Console.WriteLine("Success! File uploaded.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Upload failed: {ex.Message}");
            }

            Console.WriteLine("\nPress any key to return...");
            Console.ReadKey(true);
        }
    }

    public class S3Service
    {
        private readonly IAmazonS3 _client;
        public string BucketName { get; }

        private S3Service(IAmazonS3 client, string bucketName)
        {
            _client = client;
            BucketName = bucketName;
        }

        public static S3Service Create(string accessKey, string secretKey, string region, string bucket)
        {
            var creds = new BasicAWSCredentials(accessKey, secretKey);
            var client = new AmazonS3Client(creds, RegionEndpoint.GetBySystemName(region));
            return new S3Service(client, bucket);
        }

        public async Task<List<string>> ListObjectsAsync()
        {
            var keys = new List<string>();
            string continuationToken = null;

            do
            {
                var req = new ListObjectsV2Request
                {
                    BucketName = BucketName,
                    ContinuationToken = continuationToken
                };

                var resp = await _client.ListObjectsV2Async(req);

                foreach (var obj in resp.S3Objects)
                    keys.Add(obj.Key);

                continuationToken = resp.IsTruncated == true ? resp.NextContinuationToken : null;

            } while (continuationToken != null);

            return keys;
        }

        public async Task UploadFileAsync(string localPath, string remotePath)
        {
            if (!File.Exists(localPath))
                throw new FileNotFoundException("Local file not found", localPath);

            var putReq = new PutObjectRequest
            {
                BucketName = BucketName,
                Key = remotePath,
                FilePath = localPath,
                ContentType = GetContentType(localPath)
            };

            var resp = await _client.PutObjectAsync(putReq);

            if (resp.HttpStatusCode != System.Net.HttpStatusCode.OK && resp.HttpStatusCode != System.Net.HttpStatusCode.NoContent)
                throw new Exception($"S3 returned status {resp.HttpStatusCode}");
        }

        private static string GetContentType(string path)
        {
            var ext = Path.GetExtension(path).ToLowerInvariant();
            return ext switch
            {
                ".png" => "image/png",
                ".jpg" or ".jpeg" => "image/jpeg",
                ".mp3" => "audio/mpeg",
                ".txt" => "text/plain",
                ".json" => "application/json",
                _ => "application/octet-stream",
            };
        }
    }
}