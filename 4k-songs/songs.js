let raw_data = Array();

let search = document.getElementsByTagName("input")
let table = document.getElementsByTagName("table")


function make_table(data) {
    tbody = table[0].getElementsByTagName("tbody")[0]
    tbody.innerHTML = table[0].rows[0].innerHTML;
    tbody.insertAdjacentHTML("beforeend",
        data.map(line_split => {
            return `<tr><td>${line_split.join("</td><td>")}</td></tr>`
        }).join("")
    )
}

to_fetch = ["ru.csv", "en.csv", "classic.csv"]

function cleat_line(line) {
    return line.replace(/^"/, "").replace(/"$/, "").replace(/""/g, '"')
}

function add_data(i) {
    if (i >= to_fetch.length) {
        input_search()
        return
    }

    fetch(to_fetch[i])
        .then(data => data.text())
        .then(data => data.split("\n")
            .filter((line, i) => line != "")
            .map((line, i) => {
                ls = line.split(";")
                ls[1] = cleat_line(ls[1])
                ls[2] = cleat_line(ls[2])
                return ls
            })
        )
        .then(data => {
            raw_data = raw_data.concat(data)
            add_data(i + 1)
        })
}
add_data(0)


function input_search() {
    reg_clear = /["'\/,\.\s]/g

    search_value = search[0].value
        .toLowerCase()
        .replace(reg_clear, "")

    console.log("Searching:", search_value)

    data = raw_data.filter(line => line
        .join("")
        .toLowerCase()
        .replace(reg_clear, "")
        .includes(search_value)
    )
    // .sort((a,b) => parseInt(a[0]) > parseInt(b[0]))
    console.log(data)
    make_table(data)
}
