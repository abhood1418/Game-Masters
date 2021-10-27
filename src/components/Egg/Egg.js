import './Egg.css';

const Egg = () => {
  return (
    <div className="easterdiv">
      <h1>You found the Egg!</h1>
      <img src="https://i.pinimg.com/originals/cf/f1/2e/cff12e97f28cb6d4e7fd6633d30c80f6.jpg" alt="dragon easter egg" className="eggimg" />
      <h4>Bards will sing of your discovery! Why not give yourself some Bardic Inspiration!</h4>
      <br />
      <br/>
      <h4>While we're here, let's talk about upcoming site updates!</h4>
      <hr/>
      <ul>
        <li><strong>Game Master Toolkit</strong>
          <li>
            Including Dice Roller, Campaign Journal, Polling, & More...
          </li>
        </li>
        <br/>
        <li><strong>User Authentication</strong>
          <li>Create Profiles, Manage Campaigns, Create a Portfolio</li>
        </li>
        <br/>
        <li><strong>Hosting</strong>
          <li>Watch Ongoing Games or Host your own or Join others. </li>
        </li>
        <br/>
        <li><strong>NPC & PC Builder</strong>
          <li>Create compelling characters for your games!</li>
        </li>

      </ul>
    </div>
  )
}

export default Egg;