# CMAKE generated file: DO NOT EDIT!
# Generated by "MinGW Makefiles" Generator, CMake Version 3.29

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

SHELL = cmd.exe

# The CMake executable.
CMAKE_COMMAND = "C:\Program Files\JetBrains\CLion 2024.2.0.1\bin\cmake\win\x64\bin\cmake.exe"

# The command to remove a file.
RM = "C:\Program Files\JetBrains\CLion 2024.2.0.1\bin\cmake\win\x64\bin\cmake.exe" -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = C:\Users\user\Desktop\step\copy_constructor

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = C:\Users\user\Desktop\step\copy_constructor\cmake-build-debug

# Include any dependencies generated for this target.
include CMakeFiles/copy_constructor_.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/copy_constructor_.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/copy_constructor_.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/copy_constructor_.dir/flags.make

CMakeFiles/copy_constructor_.dir/main.cpp.obj: CMakeFiles/copy_constructor_.dir/flags.make
CMakeFiles/copy_constructor_.dir/main.cpp.obj: C:/Users/user/Desktop/step/copy_constructor/main.cpp
CMakeFiles/copy_constructor_.dir/main.cpp.obj: CMakeFiles/copy_constructor_.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=C:\Users\user\Desktop\step\copy_constructor\cmake-build-debug\CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/copy_constructor_.dir/main.cpp.obj"
	C:\PROGRA~1\JETBRA~1\CLION2~1.1\bin\mingw\bin\G__~1.EXE $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/copy_constructor_.dir/main.cpp.obj -MF CMakeFiles\copy_constructor_.dir\main.cpp.obj.d -o CMakeFiles\copy_constructor_.dir\main.cpp.obj -c C:\Users\user\Desktop\step\copy_constructor\main.cpp

CMakeFiles/copy_constructor_.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/copy_constructor_.dir/main.cpp.i"
	C:\PROGRA~1\JETBRA~1\CLION2~1.1\bin\mingw\bin\G__~1.EXE $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E C:\Users\user\Desktop\step\copy_constructor\main.cpp > CMakeFiles\copy_constructor_.dir\main.cpp.i

CMakeFiles/copy_constructor_.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/copy_constructor_.dir/main.cpp.s"
	C:\PROGRA~1\JETBRA~1\CLION2~1.1\bin\mingw\bin\G__~1.EXE $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S C:\Users\user\Desktop\step\copy_constructor\main.cpp -o CMakeFiles\copy_constructor_.dir\main.cpp.s

# Object files for target copy_constructor_
copy_constructor__OBJECTS = \
"CMakeFiles/copy_constructor_.dir/main.cpp.obj"

# External object files for target copy_constructor_
copy_constructor__EXTERNAL_OBJECTS =

copy_constructor_.exe: CMakeFiles/copy_constructor_.dir/main.cpp.obj
copy_constructor_.exe: CMakeFiles/copy_constructor_.dir/build.make
copy_constructor_.exe: CMakeFiles/copy_constructor_.dir/linkLibs.rsp
copy_constructor_.exe: CMakeFiles/copy_constructor_.dir/objects1.rsp
copy_constructor_.exe: CMakeFiles/copy_constructor_.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --bold --progress-dir=C:\Users\user\Desktop\step\copy_constructor\cmake-build-debug\CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable copy_constructor_.exe"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles\copy_constructor_.dir\link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/copy_constructor_.dir/build: copy_constructor_.exe
.PHONY : CMakeFiles/copy_constructor_.dir/build

CMakeFiles/copy_constructor_.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles\copy_constructor_.dir\cmake_clean.cmake
.PHONY : CMakeFiles/copy_constructor_.dir/clean

CMakeFiles/copy_constructor_.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" C:\Users\user\Desktop\step\copy_constructor C:\Users\user\Desktop\step\copy_constructor C:\Users\user\Desktop\step\copy_constructor\cmake-build-debug C:\Users\user\Desktop\step\copy_constructor\cmake-build-debug C:\Users\user\Desktop\step\copy_constructor\cmake-build-debug\CMakeFiles\copy_constructor_.dir\DependInfo.cmake "--color=$(COLOR)"
.PHONY : CMakeFiles/copy_constructor_.dir/depend
