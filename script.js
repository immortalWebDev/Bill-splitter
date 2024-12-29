const billInput = document.querySelector('#bill-amount')
const tipCustomInput = document.querySelector('.custom-tip')
const peopleCountInput = document.querySelector('.number-of-people')
const calculateBillBtn = document.querySelector('.generate-bill-btn')
const tipDisplay = document.querySelector('.tip-amount span')
const totalDisplay = document.querySelector('.total span')
const perPersonDisplay = document.querySelector('.each-person-bill span')
const tipOptionsContainer = document.querySelector('.tip-container')
const clearBtn = document.querySelector('.reset-btn')

let tipRate = 0

calculateBillBtn.addEventListener('click', () => {
  const billValue = parseInt(billInput.value)
  const numberOfPeople = parseInt(peopleCountInput.value)

  const calculatedTip = billValue * (tipRate / 100)
  const finalBill = billValue + calculatedTip
  const individualShare = finalBill / numberOfPeople

  tipDisplay.innerText = `₹${calculatedTip}`
  totalDisplay.innerText = `₹${finalBill}`
  perPersonDisplay.innerText = `₹${individualShare.toFixed(2)}`

  clearBtn.disabled = false
})

tipOptionsContainer.addEventListener('click', (e) => {
  if (tipOptionsContainer.classList.contains('disabled')) return

  if (e.target !== tipOptionsContainer) {
    ;[...tipOptionsContainer.children].forEach((tip) =>
      tip.classList.remove('selected')
    )
    e.target.classList.add('selected')
    tipRate = parseInt(e.target.innerText)
    tipCustomInput.value = ''

    if (peopleCountInput.value && tipRate) {
      calculateBillBtn.disabled = false
    } else {
      calculateBillBtn.disabled = true
    }
  }
})

tipCustomInput.addEventListener('input', () => {
  tipRate = parseInt(tipCustomInput.value)
  ;[...tipOptionsContainer.children].forEach((tip) =>
    tip.classList.remove('selected')
  )

  if (peopleCountInput.value && tipRate) {
    calculateBillBtn.disabled = false
  } else {
    calculateBillBtn.disabled = true
  }
})

clearBtn.addEventListener('click', () => {
  tipRate = 0
  billInput.value = ''
  tipCustomInput.value = ''
  peopleCountInput.value = ''
  tipDisplay.innerText = ''
  totalDisplay.innerText = ''
  perPersonDisplay.innerText = ''
  ;[...tipOptionsContainer.children].forEach((tip) =>
    tip.classList.remove('selected')
  )

  clearBtn.disabled = true
  calculateBillBtn.disabled = true
})

billInput.addEventListener('input', () => {
  if (billInput.value) {
    tipCustomInput.disabled = false
    peopleCountInput.disabled = false
    tipOptionsContainer.classList.remove('disabled')
  } else {
    tipCustomInput.disabled = true
    peopleCountInput.disabled = true
    tipOptionsContainer.classList.add('disabled')
  }
})

peopleCountInput.addEventListener('input', () => {
  if (peopleCountInput.value && tipRate) {
    calculateBillBtn.disabled = false
  } else {
    calculateBillBtn.disabled = true
  }
})



document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");

  window.addEventListener("scroll", () => {
    
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight) {
      footer.classList.add("visible"); 
    } else {
      footer.classList.remove("visible"); 
    }
  });
});
