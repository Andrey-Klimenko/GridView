class GridView {

  /**
 * @param {string} element
 */

  setElement(element) {
    if (document.querySelector(element)) {
      this._element = element
      return true
    }
    return false
  }

  render(data) {
    this.setElement(data.element)
    this.attribute = data.attribute
    this.data = data.data

    const table = document.createElement('table')

    let tr = document.createElement('tr')
    for (let key in this.attribute) {
      let th = document.createElement('th')
      if (this.attribute[key].label) {
        th.textContent = this.attribute[key].label
      } else {
        th.textContent = key
      }
      tr.append(th)
    }
    table.append(tr)

    this.data.forEach(elem => {
      let tr = document.createElement('tr')
      for (const key in this.attribute) {
        let td = document.createElement('td')
        let val

        if (this.attribute[key].callback) {
          val = this.attribute[key].callback(elem[key])
          if (typeof val == 'string') {
            td.textContent = val
          } else {
            td.append(val)
          }
        } else {
          td.textContent = elem[key]
        }
        tr.append(td)
      }
      table.append(tr)

    });

    document.querySelector(this._element).append(table)
  }
}