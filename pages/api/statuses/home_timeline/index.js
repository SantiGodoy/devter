const timeline = [
  {
    id: "0",
    avatar:
      "https://pbs.twimg.com/profile_images/1534696895402090496/wLVG4I9C_400x400.jpg",
    userName: "nanosecso",
    message: `Filmación?`,
    name: "Sexino",
  },
  {
    id: "1",
    avatar:
      "https://pbs.twimg.com/profile_images/1387806737554681858/qRL3fIhF_400x400.jpg",
    userName: "elreyguiri",
    message: "LA VUELTA DE ALONSO ES PERFECTA",
    name: "ElReyGuiri",
  },
  {
    id: "2",
    userName: "iboyano",
    name: "Ibai Llanos",
    avatar:
      "https://pbs.twimg.com/profile_images/1513174819038240777/77Zo3WBf_400x400.jpg",
    message: `Oye que el viejo de Auron va a ganar los Saw Games con 54 años y hace tres años no sabía ni lo que era el redstone esto es de coña.`,
  },
  {
    id: "3",
    avatar:
      "https://pbs.twimg.com/profile_images/1534696895402090496/wLVG4I9C_400x400.jpg",
    userName: "nanosecso",
    message: `Filmación?`,
    name: "Sexino",
  },
  {
    id: "4",
    avatar:
      "https://pbs.twimg.com/profile_images/1387806737554681858/qRL3fIhF_400x400.jpg",
    userName: "elreyguiri",
    message: "LA VUELTA DE ALONSO ES PERFECTA",
    name: "ElReyGuiri",
  },
  {
    id: "5",
    userName: "iboyano",
    name: "Ibai Llanos",
    avatar:
      "https://pbs.twimg.com/profile_images/1513174819038240777/77Zo3WBf_400x400.jpg",
    message: `Oye que el viejo de Auron va a ganar los Saw Games con 54 años y hace tres años no sabía ni lo que era el redstone esto es de coña.`,
  },
  {
    id: "6",
    avatar:
      "https://pbs.twimg.com/profile_images/1534696895402090496/wLVG4I9C_400x400.jpg",
    userName: "nanosecso",
    message: `Filmación?`,
    name: "Sexino",
  },
  {
    id: "7",
    avatar:
      "https://pbs.twimg.com/profile_images/1387806737554681858/qRL3fIhF_400x400.jpg",
    userName: "elreyguiri",
    message: "LA VUELTA DE ALONSO ES PERFECTA",
    name: "ElReyGuiri",
  },
  {
    id: "8",
    userName: "iboyano",
    name: "Ibai Llanos",
    avatar:
      "https://pbs.twimg.com/profile_images/1513174819038240777/77Zo3WBf_400x400.jpg",
    message: `Oye que el viejo de Auron va a ganar los Saw Games con 54 años y hace tres años no sabía ni lo que era el redstone esto es de coña.`,
  },
  {
    id: "9",
    avatar:
      "https://pbs.twimg.com/profile_images/1534696895402090496/wLVG4I9C_400x400.jpg",
    userName: "nanosecso",
    message: `Filmación?`,
    name: "Sexino",
  },
  {
    id: "10",
    avatar:
      "https://pbs.twimg.com/profile_images/1387806737554681858/qRL3fIhF_400x400.jpg",
    userName: "elreyguiri",
    message: "LA VUELTA DE ALONSO ES PERFECTA",
    name: "ElReyGuiri",
  },
  {
    id: "11",
    userName: "iboyano",
    name: "Ibai Llanos",
    avatar:
      "https://pbs.twimg.com/profile_images/1513174819038240777/77Zo3WBf_400x400.jpg",
    message: `Oye que el viejo de Auron va a ganar los Saw Games con 54 años y hace tres años no sabía ni lo que era el redstone esto es de coña.`,
  },
  {
    id: "12",
    avatar:
      "https://pbs.twimg.com/profile_images/1534696895402090496/wLVG4I9C_400x400.jpg",
    userName: "nanosecso",
    message: `Filmación?`,
    name: "Sexino",
  },
  {
    id: "13",
    avatar:
      "https://pbs.twimg.com/profile_images/1387806737554681858/qRL3fIhF_400x400.jpg",
    userName: "elreyguiri",
    message: "LA VUELTA DE ALONSO ES PERFECTA",
    name: "ElReyGuiri",
  },
  {
    id: "14",
    userName: "iboyano",
    name: "Ibai Llanos",
    avatar:
      "https://pbs.twimg.com/profile_images/1513174819038240777/77Zo3WBf_400x400.jpg",
    message: `Oye que el viejo de Auron va a ganar los Saw Games con 54 años y hace tres años no sabía ni lo que era el redstone esto es de coña.`,
  },
  {
    id: "15",
    avatar:
      "https://pbs.twimg.com/profile_images/1534696895402090496/wLVG4I9C_400x400.jpg",
    userName: "nanosecso",
    message: `Filmación?`,
    name: "Sexino",
  },
  {
    id: "16",
    avatar:
      "https://pbs.twimg.com/profile_images/1387806737554681858/qRL3fIhF_400x400.jpg",
    userName: "elreyguiri",
    message: "LA VUELTA DE ALONSO ES PERFECTA",
    name: "ElReyGuiri",
  },
  {
    id: "17",
    userName: "iboyano",
    name: "Ibai Llanos",
    avatar:
      "https://pbs.twimg.com/profile_images/1513174819038240777/77Zo3WBf_400x400.jpg",
    message: `Oye que el viejo de Auron va a ganar los Saw Games con 54 años y hace tres años no sabía ni lo que era el redstone esto es de coña.`,
  },
]

export default (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.send(JSON.stringify(timeline))
}
