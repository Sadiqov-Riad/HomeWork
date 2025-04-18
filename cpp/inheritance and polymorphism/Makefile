CXX = g++
CXXFLAGS = -std=c++11 -Wall

SRCS = src/main.cpp \
       src/skills/Skill.cpp \
       src/core/Character.cpp \
       src/characters/Tank.cpp \
       src/characters/Mage.cpp \
       src/characters/Thief.cpp

OBJS = $(SRCS:.cpp=.o)
EXEC = game

all: $(EXEC)

$(EXEC): $(OBJS)
	$(CXX) $(CXXFLAGS) -o $@ $(OBJS)

%.o: %.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

clean:
	rm -f $(OBJS) $(EXEC)

run: $(EXEC)
	./$(EXEC)

.PHONY: all clean run 