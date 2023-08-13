import React from "react";
import style from './Profileinfo.module.css'

const ProfileInfo = () => {
    return <div className = {style.content}>
    <div>
    <img src = "https://images3.alphacoders.com/129/1298918.png" alt = "pics" className = {style.hat_img}></img>
    </div>
    <div className={style.user_avatar}>
      <img src = "https://cdn.vox-cdn.com/thumbor/oa30Sah_236I-aL0bN2pKgj-1to=/0x0:1904x950/1200x800/filters:focal(800x323:1104x627)/cdn.vox-cdn.com/uploads/chorus_image/image/70360190/neon_still.0.png" alt = "avatar" className = {style.avatar}></img>
    </div>
  </div>
}

export default ProfileInfo;