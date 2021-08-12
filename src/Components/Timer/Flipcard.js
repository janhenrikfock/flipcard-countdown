import './Flipcard.css'

export default function Flipcard({ measure, time }) {
  return (
    <div className="flipcard__container">
      <div className="card">
        <h2>{time}</h2>
      </div>
      <h3>{measure}</h3>
    </div>
  )
}
