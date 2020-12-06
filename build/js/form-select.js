(() => {
    const hsConfig = {
        portalId: "8518812",
        formId: "c2b9816a-4cd6-4a80-aef3-4f4d9efa837a",
    };

    const contactInfo = {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        company: "",
        state: "",
        what_best_describes_you_: "",
        annual_rev: "<$5 million",
        employees: "1-20"
    };

    ['firstname', 'lastname', 'phone', 'email', 'company'].forEach(n => {
        const e = document.getElementById(n)
        e.addEventListener('input', ev => {
            contactInfo[n] = ev.target.value
        });
    });

    ['state', 'what_best_describes_you_'].forEach(n => {
        const e = document.getElementById(n)
        e.addEventListener('change', ev => {
            contactInfo[n] = ev.target.value
        });
    });

    let revenueList = document.querySelector('.revenue-list').querySelectorAll('.form__row-item-list-item')
    let employeesList = document.querySelector('.employees-list').querySelectorAll('.form__row-item-list-item')
    
    revenueList.forEach((item, index) => {
        item.addEventListener('click', () => {
            revenueList.forEach(item => {
                item.classList.remove('form__row-item-list-item--active')
            })
    
            revenueList[index].classList.add('form__row-item-list-item--active')
            contactInfo.annual_rev = item.textContent.trim()
        })
    })
    
    employeesList.forEach((item, index) => {
        item.addEventListener('click', () => {
            employeesList.forEach(item => {
                item.classList.remove('form__row-item-list-item--active')
            })
    
            employeesList[index].classList.add('form__row-item-list-item--active')
            contactInfo.employees = item.textContent.trim()
        })
    });

    let nextSteps = document.getElementById('next-steps')
    let form = document.getElementById('contact-form')
    let formSubmit = document.getElementById('form-submit')
    let hiddenSubmit = document.getElementById('hidden-submit')
    form.addEventListener('submit', async ev => {
        ev.preventDefault()
        const {portalId, formId} = hsConfig
        const fields = Object.entries(contactInfo).map(
            ([k, v]) => ({
                name: k,
                value: v,
            })
        )
        try {
            const resp = await fetch(
                `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '*/*',
                        'Accept-Encoding': 'gzip, deflate, br',
                    },
                    body: JSON.stringify({
                        fields,
                        skipValidation: true,
                    })
                }
            )
            const results = await resp.json()
            if (results.status === 'error') {
                // TODO log to a system we can see on backend
                console.log(results)
                return;
            }
        } catch (e) {
            console.log(e)
            return;
        }
        form.style.display = 'none'
        nextSteps.style.display = 'block'
        const topOfNextSteps = (
            nextSteps.getBoundingClientRect().top // element
            + window.pageYOffset                  // scroll offset
            - 97                                  // header height + 20px
        )
        console.log(top)
        window.scrollTo({
            top: topOfNextSteps,
            behavior: 'smooth',
        })
    })
    formSubmit.addEventListener('click', ev => {
        hiddenSubmit.click()
        ev.preventDefault()
    })
})()