new Vue({
  el: "#app",
  data: {
    showNextSlide: false,
    slideIndex: 0,
    complexity: "",
    expression: "2+2",
    correctAnswer: 4,
    userAnswer: 0,
    modalHeader: "",
    modalBody: "",
    mediumSigns: ["+", "-"],
    hardSigns: ["+", "-", "/", "*"],
  },
  methods: {
    generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomElement(list) {
      var randomIndex = Math.floor(Math.random() * list.length);
      return list[randomIndex];
    },
    hideSlide(event) {
      const slide = event.target.closest(".slide");
      $(slide).hide();
      this.slideIndex++;
      this.showNextSlide = true;
      this.complexity = event.target.getAttribute("complexity");
    },
    generateAndShowExpression() {
      if (this.userAnswer != this.correctAnswer) {
        this.modalHeader = "Ошибка!";
        this.modalBody = "Ты не правильно решил(-а) пример!";
      } else {
        this.modalHeader = "Отлично!";
        this.modalBody = "Ты правильно решил(-а) пример!";
        this.userAnswer = "";
        if (this.complexity == "easy") {
          this.expression = `${this.generateRandomNumber(
            1,
            20
          )}+${this.generateRandomNumber(20, 50)}`;
          this.correctAnswer = eval(this.expression).toFixed(1);
        } else if (this.complexity == "medium") {
          this.expression = `${this.generateRandomNumber(
            5,
            50
          )}${this.getRandomElement(
            this.mediumSigns
          )}${this.generateRandomNumber(50, 100)}`;
          this.correctAnswer = eval(this.expression).to_.toFixed(1);
        } else if (this.complexity == "hard") {
          this.expression = `${this.generateRandomNumber(
            50,
            100
          )}${this.getRandomElement(this.hardSigns)}${this.generateRandomNumber(
            10,
            1000
          )}`;
          this.correctAnswer = eval(this.expression).toFixed(1);
          console.log(this.correctAnswer);
        }
      }
    },
    exit() {
      location.reload();
    },
  },
});
