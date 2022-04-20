//How to play the game hangman.
//Step by step rules of the game.
@link URL
//File
//@author CassidyCrawford
//@since 4.19.2022

//Pick one player to be the board creator
  //Board creator choses a secret word
    //Draw a space for every letter in the secret word
      //The other player guesses one letter at a time from the english alphabet
        //If the letter is guessed correctly the board creator fills the correlating space of the secret word
          //If a letter is guessed that is not in the secret word the board creator draws a part of the hangman
            //First wrong guess, draw an upside down “L”
              //Second wrong guess, draw a horizontal line and the bottom of the upside down “L”
                //Third wrong guess, draw a circle for the head
                  //Fourth wrong guess, draw a vertical line for the body
                    //Fifth wrong guess, draw one a diagonal line for the right arm
                      //Sixth wrong guess, draw another diagonal for the left arm
                        //Seventh wrong guess, draw a diagonal line for the right leg
                          //Eighth wrong guess, draw another diagonal for the left leg
          // If the hangman stick figure has been drawn before the secret word has been guessed the player loses
            //If the secret word is guessed before the stick figure is drawn, the board creator
