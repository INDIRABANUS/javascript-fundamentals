const faqData = [
  {
    question: "1. Lorem ipsum dolor sit amet, consectetur adipisicing?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis inventore neque repudiandae et. Aliquam voluptatem ab quasi quidem eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, maxime.",
  },
  {
    question: "2. Lorem ipsum dolor sit amet, consectetur adipisicing?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis inventore neque repudiandae et. Aliquam voluptatem ab quasi quidem eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, maxime.",
  },
  {
    question: "3. Lorem ipsum dolor sit amet, consectetur adipisicing?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis inventore neque repudiandae et. Aliquam voluptatem ab quasi quidem eaque",
  },
  {
    question: "4. Lorem ipsum dolor sit amet, consectetur adipisicing?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis inventore neque repudiandae et. Aliquam voluptatem ab quasi quidem eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, maxime. ",
  },
  {
    question: "5. Lorem ipsum dolor sit amet, consectetur adipisicing?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis inventore neque repudiandae et. Aliquam voluptatem ab quasi quidem eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, maxime.",
  },
  {
    question: "6. Lorem ipsum dolor sit amet, consectetur adipisicing?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis inventore neque repudiandae et. Aliquam voluptatem ab quasi quidem eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, maxime.",
  },
  {
    question: "6. Lorem ipsum dolor sit amet, consectetur adipisicing?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis inventore neque repudiandae et. Aliquam voluptatem ab quasi quidem eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, maxime.",
  },
  {
    question: "7. Lorem ipsum dolor sit amet, consectetur adipisicing?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor debitis inventore neque repudiandae et. Aliquam voluptatem ab quasi quidem eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, maxime.",
  },
];

const faqContainer = document.getElementById("faqContainer");

faqData.map(function (item) {
  let article = document.createElement("article");
  article.className = "faq-item";

  const markup = `
  <div class="item-question">
    <span class="question-text">${item.question}</span>
      <span class="arraw-container">
        <span class="expand">⬇️</span>
        <span class="close">⬆️</span>
      </span>
    </sapn>
  </div>
  <div class="item-answer">
    <span class="answer-text">${item.answer}</span>
  </div>
  `;

  article.innerHTML = markup;
  faqContainer.append(article);
});

const arrowContainer = document.querySelectorAll(".arraw-container");

arrowContainer.forEach((item) => {
  item.addEventListener("click", (elm) => {
    const parent = elm.currentTarget.parentElement.parentElement;
    parent.classList.toggle("show-answer");
  });
});
