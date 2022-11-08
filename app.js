function getRating() {
  var rateButton = document.getElementsByClassName("rate-numer");
  var rate = "";
  for (var i = 0; i < rateButton.length; i++) {
    var button = rateButton[i];
    button.addEventListener("click", function onClick(event) {
      rate = event.target.value;
      console.log(rate);
      submitRating(rate);
    });
  }
}

function submitRating(rate) {
  var submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", function (event) {
    var originalHtmlContainer = document.getElementById("wrapper");
    var text = `You selected ${rate} out of 5`;
    var thankYouHtmlContainer = `<div class="thankyou-div">
      <img
        src="./images/illustration-thank-you.svg"
        alt="thank you image"
        class="thankyou-image"
      />
      <div class="you-selected">
        <p id="you-selected-p">
          ${text}
        </p>
      </div>
      <h1>Thank you!</h1>
      We appreciate you taking the time to give a rating. If you ever need more
      support, don’t hesitate to get in touch!
    </div>`;
    originalHtmlContainer.innerHTML = thankYouHtmlContainer;
  });
}
getRating();
