const timeline = [
  {
    id: "0",
    avatar:
      "https://pbs.twimg.com/profile_images/1534696895402090496/wLVG4I9C_400x400.jpg",
    username: "nanosecso",
    message: `Filmación?`,
    name: "Sexino",
  },
  {
    id: "1",
    avatar:
      "https://pbs.twimg.com/profile_images/1387806737554681858/qRL3fIhF_400x400.jpg",
    username: "elreyguiri",
    message: "LA VUELTA DE ALONSO ES PERFECTA",
    name: "ElReyGuiri",
  },
  {
    id: "2",
    username: "iboyano",
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
