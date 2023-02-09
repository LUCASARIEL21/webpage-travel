import React from 'react'
import AdSense from 'react-adsense'

export const GoogleAd = () => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "15px"
    }}>
      <AdSense.Google
        client="ca-pub-5729807167062648"
        slot="1085787706"
        style={{ display: 'block', height: 300 }}
        format='auto'
        responsive='true'
        layoutKey='-gw-1+2a-9x+5c'
      />
    </div>
  )
}