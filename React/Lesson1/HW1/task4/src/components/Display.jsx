import React from 'react';

function CityImage({ avatarUrl, BookName }) {
  return (
    <img
      className="BookImage"
      src={avatarUrl}
      alt={BookName}
    />
  );
}

function DisplayInfo({ book }) {
  return (
    <div className="DisplayInfo">
      <div className="BookInfo">
        <CityImage avatarUrl={book.avatarUrl} BookName={book.bookName} />
        <div className='BookInfo-name'>
            {book.bookName}
        </div>
        <div className="BookInfo-author">
            {book.author}
        </div>
        <div className="genre">
            {book.genre}
        </div>
      </div>
    </div>
  );
}

export default DisplayInfo;