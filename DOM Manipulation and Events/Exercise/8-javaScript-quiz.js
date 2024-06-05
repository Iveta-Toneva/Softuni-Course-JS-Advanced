function solve() {

  let firstSectionElement = document.querySelector('section');
  let counter = 0;
  let answerElements = document.querySelectorAll('p.answer-text');
  let firstGroupAnswersArray = Array.from(answerElements).slice(0, 2);
  let correctAnswerElement = firstGroupAnswersArray[0];
  let wrongAnswerElement = firstGroupAnswersArray[1];
  let hiddenSectionsElements = document.querySelectorAll('section');

  correctAnswerElement.addEventListener('click', (event) => {

    counter++;
    hiddenSectionsElements[1].style.display = 'block';
    firstSectionElement.style.display = 'none';

  });

  wrongAnswerElement.addEventListener('click', (event) => {

    hiddenSectionsElements[1].style.display = 'block';
    firstSectionElement.style.display = 'none';

  });

  let secondGroupAnswersElement = hiddenSectionsElements[1].querySelectorAll('p.answer-text');
  console.log(secondGroupAnswersElement);
  let wrongSecondElement = secondGroupAnswersElement[0];
  let correctSecondElement = secondGroupAnswersElement[1];

  wrongSecondElement.addEventListener('click', (event) => {
    hiddenSectionsElements[2].style.display = 'block';
    hiddenSectionsElements[1].style.display = 'none';
  });
  correctSecondElement.addEventListener('click', () => {
    counter++;
    hiddenSectionsElements[2].style.display = 'block';
    hiddenSectionsElements[1].style.display = 'none';
  });


  let thirdGroupAnswersElements = hiddenSectionsElements[2].querySelectorAll('p.answer-text');
  let thirdCorrectElement = thirdGroupAnswersElements[0];
  let thirdWrongElement = thirdGroupAnswersElements[1];
  let resultElement = document.getElementById('results');

  thirdCorrectElement.addEventListener('click', (event) => {
    counter++;
    hiddenSectionsElements[2].style.display = 'none';
    let h1Element = document.querySelector('#results h1');
    if (counter === 3) {
      h1Element.textContent += 'You are recognized as top JavaScript fan!';
    } else {
      h1Element.textContent += `You have ${counter} right answers`;
    }
    resultElement.style.display = 'block';
  });

  thirdWrongElement.addEventListener('click', (event) => {
    hiddenSectionsElements[2].style.display = 'none';
    let h1Element = document.querySelector('#results h1');
    if (counter === 3) {
      h1Element.textContent += 'You are recognized as top JavaScript fan!';
    } else {
      h1Element.textContent += `You have ${counter} right answers`;
    }
    resultElement.style.display = 'block';
  });

}
