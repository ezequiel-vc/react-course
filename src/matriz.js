function priority(arr) {
  const total = arr.length
  const status = byHour(arr)
  return [total, status]
}

function byHour(arr) {
  let qtd = {
    'hour>-3': 0,
    'hour-3': 0,
    'hour-2': 0,
    'hour-1': 0,
    hour0: 0,
    hour1: 0,
    hour2: 0,
    hour3: 0,
    'hour>3': 0,
  }
  let curHour = new Date()
  for (let i = 0; i < arr.length; i++) {
    let timeDference = ((curHour - arr[i].expirationDate) / (1000 * 60 * 60)) % 24
    if (timeDference > -1 && timeDference < 0) {
      qtd['hour0']++
    } else if (timeDference > -2 && timeDference < -1) {
      qtd['hour1']++
    } else if (timeDference > -3 && timeDference < -2) {
      qtd['hour2']++
    } else if (timeDference > -4 && timeDference < -3) {
      qtd['hour3']++
    } else if (timeDference < -3) {
      qtd['hour>3']++
    } else if (timeDference < 2 && timeDference > 1) {
      qtd['hour-1']++
    } else if (timeDference < 3 && timeDference > 2) {
      qtd['hour-2']++
    } else if (timeDference < 4 && timeDference > 3) {
      qtd['hour-3']++
    } else if (timeDference > 3) {
      qtd['hour>-3']++
    }
  }
  return qtd
}

export default priority
