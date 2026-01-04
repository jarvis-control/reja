console.log("Frontend JS ishga tushdi");

function itemTemplate(item) {
  return ` <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm mr-1"
            >
              O'zgartirish
            </button>
            <button
              data-id="${item._id}"
              class="delete-me btn btn-danger btn-sm mr-1"
            >
              O'chirish
            </button>
          </div>
        </li>`;
}

let createField = document.getElementById("create-field");
const form = document.getElementById("create-form");

form.addEventListener("submit", function (e) {
  // form - TRADITIONAL API
  e.preventDefault(); // STOP TRADITIONAL API

  // USE REST API:

  console.log("STEP1: BACKEND (/create-item) ga ma'lumot bilan kirdim");
  axios // axios - REST APIlarimizni ama'lga oshirib beradigan package
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      console.log("STEP6: FRONTENDga response bilan qaytdim");
      console.log("AxiosResponse:", response);

      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Iltimos qaytatdan harakat qiling!");
    });
});

document.addEventListener("click", function (e) {
  // delete oper
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq o'chirmoqchimisiz?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Iltimos qaytatdan harakat qiling!");
        });
    }
  }

  // edit oper
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "O'zgartirish kiriting",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {});
    }
  }
});

document.getElementById("clean-all").addEventListener("click", function () {
  axios.post("/delete-all", { delete_all: true }).then((response) => {
    alert(response.data.state);
    document.location.reload();
  });
});
