import React from 'react'
import TeamAppHeader from './TeamAppHeader'
import TeamAppTeamMember from './TeamAppTeamMember'
import TeamAppFooter from './TeamAppFooter'
const TeamApp = () => {
  return (
    <>
       <div className="teamHeader">
        <TeamAppHeader />
       </div>
       <div className="members">
        <TeamAppTeamMember />
       </div>
       <div className="teamFooter">
         <TeamAppFooter />
       </div>
    </>
  )
}

export default TeamApp