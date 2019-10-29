import React, {useState} from 'react';
import FlavorText from './flavor-text';
import { FaPodcast } from 'react-icons/fa';
const videos = [
  {"title":"I Kings 11 11 26","link":"https://www.youtube.com/embed/jdpq_UYJLyA"},
  {"title":"2019/10/25 Psalm 5 Four Requests","link":"https://www.youtube.com/embed/wAsmEeDHCr8"},
  {"title":"2019/10/19 Psalm 4 Acting Shamefully","link":"https://www.youtube.com/embed/LZ1KNvwDjiw"},
  {"title":"2019/10/12 Psalm 3 God Responds in Our Time of Need","link":"https://www.youtube.com/embed/0dQJuWSvmRA"},
  {"title":"I Kings 11 1 10 Solomon the Danger of Getting Everything you want","link":"https://www.youtube.com/embed/U-Nkv9S2r7o"},
  {"title":"2019/10/05 Psalm 02","link":"https://www.youtube.com/embed/lUOcKiuipAo"},
  {"title":"2019/09/28 Psalm 01","link":"https://www.youtube.com/embed/JOh34-_jTWM"},
  {"title":"2011/10/01 Revelation 22:11-21 Closing Salutation","link":"https://www.youtube.com/embed/LsHmjBO6HpY"},
  {"title":"2011/09/24 Revelation 22:1-10 The Future is Similar to the Garden of Eden","link":"https://www.youtube.com/embed/TyV8nNP3ZVc"},
  {"title":"2011/09/17 Revelation 21:9-27 The Holy City of God New Jerusalem","link":"https://www.youtube.com/embed/r2BWsx8Vu7I"},
  {"title":"2011/09/10 Revelation Revelation 21:1-8 Introduction to the New Heavens and the New Earth","link":"https://www.youtube.com/embed/8lCopwIju8k"},
  {"title":"2011/09/03 Revelation 20:7-15 The White Throne Judgement","link":"https://www.youtube.com/embed/qclFPkq1yVQ"},
  {"title":"2011/08/27 Revelation Revelation 20:1-6 The Millenium","link":"https://www.youtube.com/embed/ru7SnCQT8iA"},
  {"title":"2011/08/20 Revelation 19:11-21 The Return of Christ as King of Kings","link":"https://www.youtube.com/embed/AwYX6beMq4A"},
  {"title":"2011/08/13 Revelation 18:1-24 Babylon has Fallen","link":"https://www.youtube.com/embed/0tbYbQCOxWE"},
  {"title":"2011/08/13 Revelation 19:1-10 Alleluia","link":"https://www.youtube.com/embed/U5AMt2wUDAg"},
  {"title":"2011/07/16 Revelation 17;1-18 Ding Dong the Whore is Dead","link":"https://www.youtube.com/embed/bdNZfBzGTio"},
  {"title":"2011/07/09 Revelation 16:11-20 The Seven Last Plagues Part 2","link":"https://www.youtube.com/embed/6VS8oGReeAc"},
  {"title":"2011/07/02 Revelation 16:1-10 The Seven Last Plagues Part 1","link":"https://www.youtube.com/embed/ejM4Dr6-OmI"},
  {"title":"2011/06/04 Revelation 14:1-20 The Harvest of the Earth","link":"https://www.youtube.com/embed/qPNw5AO8N9M"},
  {"title":"2011/05/28 Revelation 13:1-18 The Beast System","link":"https://www.youtube.com/embed/qBmVSkgs2SM"},
  {"title":"2011/05/21 Revelation 12:1-17 The Women Representing Believers in All Ages","link":"https://www.youtube.com/embed/sVGfbR0ifLs"},
  {"title":"2011/05/14 Revelation 11:15-19 The Seventh Trumpet","link":"https://www.youtube.com/embed/hW09DyNc2Hs"},
  {"title":"2011/05/07 Revelation 11L1-14 Two Witnesses","link":"https://www.youtube.com/embed/iiWWTVmC1F4"},
  {"title":"2011/04/23 Revelation 10:1-11 Intermission: The Little Book","link":"https://www.youtube.com/embed/J4nS9N5NRbY"},
  {"title":"2011/04/16 Revelation 9:13-21 The Sixth Trumpet - The Second Woe","link":"https://www.youtube.com/embed/_qU2PkxRb3k"},
  {"title":"2011/04/09 Revelation 9:1-12 The Fifth Trumpet - The First Woe - Judgement of the World - Protection of the saints","link":"https://www.youtube.com/embed/R9VLMVYWwFI"},
  {"title":"2011/03/26 Revelation 8:12-13 The Fourth Trumpet and Preparation for the First Woe","link":"https://www.youtube.com/embed/kUFHns45ups"},
  {"title":"2011/03/19 Revelation 8:1-11 The Seventh Seal - The First 3 Trumpets","link":"https://www.youtube.com/embed/Zv4iwYQRFEQ"},
  {"title":"2011/03/12 Revelation 7:1-17 Intermission: The Sealing of the Saints","link":"https://www.youtube.com/embed/GVkOwYkrNuk"},
  {"title":"2011/03/05 Revelation 6:12-17 The Sixth Seal - The Nature of the Heavens are Changed","link":"https://www.youtube.com/embed/GSDVfq4h7rY"},
  {"title":"2011/02/26 Revelation 6:9-11 The Fifth Seal the Martyrdom of Christians","link":"https://www.youtube.com/embed/6HYHma0L08Q"},
  {"title":"2011/02/19 Revelation 6:1-8 The Hoof Beats of Approaching Judgement","link":"https://www.youtube.com/embed/DAN7Xx08Fw0"},
  {"title":"2011/02/12 Revelation 5:1-13 The Lamb Alone is Worthy to Open the Revelation","link":"https://www.youtube.com/embed/F5mheqRmHNQ"},
  {"title":"2011/01/29 Revelation 4:1-11 God Alone is Worthy" ,"link":"https://www.youtube.com/embed/l0oxTASnXfk"},
  {"title":"2011/01/22 Revelation 3:14-22 The Vomited Church","link":"https://www.youtube.com/embed/RigtEYUeLzI"},
  {"title":"2011/01/15 Revelation 3:7-13 The Church at Philadelphia","link":"https://www.youtube.com/embed/c-bA7A1_jHU"},
  {"title":"2011/01/08 Revelation 3:1-6 The Church of the Living Dead","link":"https://www.youtube.com/embed/1U9cCJj-5YA"},
  {"title":"2010/12/18 Revelation 2:18-29 The Church with that women Jezebel","link":"https://www.youtube.com/embed/Hk_Auo3nK4c"},
  {"title":"2010/12/11 Revelation 2:12-17 - The Compromising Church","link":"https://www.youtube.com/embed/HG1dUP76G1o"},
  {"title":"2010/12/04 Revelation 2:8-11 - The Persecuted Church","link":"https://www.youtube.com/embed/msvRgTz2H4M"},      
  {"title":"2010/11/28 Revelation Chapter 2:1-7 - Message to the Church at Ephesus","link":"https://www.youtube.com/embed/To9kXqDcZLg"},
  {"title":"2010/11/21 Revelation Chapter 1:9-20 - The Vision","link":"https://www.youtube.com/embed/ZAGU3h6X8Eo"},
  {"title":"2010/11/14 Revelation 1:4ff - Introduction Part II","link":"https://www.youtube.com/embed/Qt6VDyWzDeA"},    
  {"title":"2010/11/07 Revelation 1:1-3 - Introduction Part I 11/21/2010 11:00AM","link":"https://www.youtube.com/embed/Ut4XD7FT2qw"},
  {"title":"2010/09/25 Mark 1:15 Repent and Believe the Gospel -  Bro. Alberto Arce","link":"https://www.youtube.com/embed/kLdwY1V_qBU"},
  {"title":"2010/08/28 Second Thessalonians - Wrap Up","link":"https://www.youtube.com/embed/9eTTA7f3kKc"},
  {"title":"2010/08/21 II Thessalonians 2:12-17 Comfort In Troubled Times -  Dr. Bill Burks D.B.L.","link":"https://www.youtube.com/embed/OJ2U-jWJLp8"},
  {"title":"2010/08/14 John 17:3  Knowing God","link":"https://www.youtube.com/embed/DHEa78q9hmg"},
  {"title":"2010/08/07 II Thessalonians 2:1-12 The Man of Sin -  Dr. Bill Burks D.B.L.","link":"https://www.youtube.com/embed/uaF-R-EWoOU"},
  {"title":"2010/07/31 II Thessalonians 1:1-12 Introduction beware of False Teaching -  Dr. Bill Burks D.B.L.","link":"https://www.youtube.com/embed/EfMbPykWQgQ"},
  {"title":"2010/06/26 Hosea 12:1-14 Chasing the Wind","link":"https://www.youtube.com/embed/pyVCTX9xk_s"},
  {"title":"2010/06/19 Hosea 11:1-12 Punishment and Repentance (Long term sin Part II)","link":"https://www.youtube.com/embed/62iHe_FknAc"},
  {"title":"2010/06/12 Hosea 10:9-15 Repent of long-term sin","link":"https://www.youtube.com/embed/NiiOrH9PVDM"},
  {"title":"2010/06/05 John 1:1-3 and 14 The Use of the Word of God in Preaching the Gospel - Dr. Bill Burks D.B.L.","link":"https://www.youtube.com/embed/i6rvPBFATAI"},
  {"title":"2010/05/29 Hosea 10:1-8 Sea-foam Religion","link":"https://www.youtube.com/embed/-JDZoU_SHPk"},
  {"title":"2010/05/22 Ecclesiastes 1:1-12:14 Life Under the sun","link":"https://www.youtube.com/embed/7sh1J6-XdCw"},
  {"title":"2010/05/15 John 14:1-14 Let not your heart be troubled","link":"https://www.youtube.com/embed/Zom75q97HQg"},
  {"title":"2010/05/08 Hosea 9:10-17 Wild","link":"https://www.youtube.com/embed/dOvf6FAFU-I"},
  {"title":"2010/05/01 Hosea 9:1-9 Blasphemous worship","link":"https://www.youtube.com/embed/iiWWTVmC1F4"},
  {"title":"2010/04/24 Hosea 7:13-8:14 Caught In The Whirlwind","link":"https://www.youtube.com/embed/0hq-AZRt_CA"},
  {"title":"2010/04/17 Hosea 7:1-12 Sin is Addictive","link":"https://www.youtube.com/embed/i2OnZ1_ZNYE"},
  {"title":"2010/04/10 Hosea 6:1-11 Hewn Stones","link":"https://www.youtube.com/embed/C4sKib--Uvg"},
  {"title":"2010/04/03 Hosea 5:8-15 Living on the Boarder of Sin","link":"https://www.youtube.com/embed/sDjYMeRjx-U"},
  {"title":"2010/03/27 Matthew 27:26-50  The Death of Christ - Lord's Supper Service","link":"https://www.youtube.com/embed/TdY6UZ3sEBg"},
  {"title":"2010/03/20 Hosea 5:1-7 Sin is a Trap","link":"https://www.youtube.com/embed/4MVeq8Qj3ow"},
  {"title":"2010/03/13 Hosea 4:6-19 God is the Source of All Knowledge","link":"https://www.youtube.com/embed/xl-uzkOrNvM"},
  {"title":"2010/03/06 Hosea 4:1-5 Bad Priests Bad Theology","link":"https://www.youtube.com/embed/fKNmp8FmzQI"},
  {"title":"2010/02/27 Hosea 3:1-5 Israel Will Seek Her King","link":"https://www.youtube.com/embed/ifLflFhvGYs"},
  {"title":"2010/02/13 Hosea 2:14-23 The Song of Reconciliation","link":"https://www.youtube.com/embed/dlOLJ0fIRp8"},
  {"title":"2010/02/06 Hosea 2:1-13 The Trial of Israel","link":"https://www.youtube.com/embed/IFMAbgb8IGg"},
  {"title":"2010/01/30 Hosea 1  Spiritual Harlotry","link":"https://www.youtube.com/embed/aPP0ttzHf2M"},
  {"title":"2010/01/23 Sabbath Theology Part 2 (Col. 2, Gal. 4, and Rom. 14)","link":"https://www.youtube.com/embed/k15c-U4CewA"},
  {"title":"2010/01/16 The Sabbath is a Benefit to Man","link":"https://www.youtube.com/embed/gYQA4Vzieyw"},
  {"title":"2010/01/09 Titus 3:8-15 Accentuate the Positive and Avoid the Negative","link":"https://www.youtube.com/embed/YPoHq_iAFQM"},
  {"title":"2010/01/02 Titus 3:1-7 Be a Good Citizen","link":"https://www.youtube.com/embed/0-ZxV-h1_QE"},
  {"title":"2009/12/26 Titus 2:1-15 Proper Instructions for a Proper People of God","link":"https://www.youtube.com/embed/C5gJDKwhROE"},
  {"title":"2009/12/19 Titus 1:10-16 Stop the Mouths of the Gainsayers","link":"https://www.youtube.com/embed/E7G69wlBpM8"},
  {"title":"2009/12/12 Titus 1:5-9 Trouble Demands Godly People to Serve","link":"https://www.youtube.com/embed/qzhuph4rx9c"},
  {"title":"2009/12/05 Titus 1:1-4 God is The Only Authority","link":"https://www.youtube.com/embed/0IhOuZ_u-rM"},
  {"title":"2009/07/11 Revelation 15:1-8 Preparation for the Wrath of God","link":"https://www.youtube.com/embed/Cjdqpc21neY"},
  {"title":"2009/03/21 Mark 14:53-65 the Trial of Jesus","link":"https://www.youtube.com/embed/YOYRFKK-j_0"},
  {"title":"2008/11/15 Mark 9:38-50  Don't Be Offensive","link":"https://www.youtube.com/embed/rL8_M_z_FIc"},
  {"title":"2008/11/08 Mark 9:33-37  Greatest in kingdom","link":"https://www.youtube.com/embed/xCxiJF8ew_A"},
  {"title":"2008/11/01 Mark 9:30-37  Afraid of ignorance","link":"https://www.youtube.com/embed/TbuBJqsNkxk"},
  {"title":"2008/10/25 Mark 9:14-28 Chaotic Situation","link":"https://www.youtube.com/embed/IqYIC7IMSXI"},
  {"title":"2008/10/18 III John - A Few Good Men","link":"https://www.youtube.com/embed/kJZhmU1yl9Y"},
  {"title":"2005/11/26 II Samuel 1:1-27  Loss of Heros","link":"https://www.youtube.com/embed/yYNVMj2odzo"},
  {"title":"2005/11/05 I Peter 4:10-19 the Suffering of Christ","link":"https://www.youtube.com/embed/Wvbct2S5lJE"},
  {"title":"2005/10/15 Peter 3:1-12 How To Live Holy Lives","link":"https://www.youtube.com/embed/JBZsdRHeM90"},
]

const YouTubeEmbed =(props)=><iframe title={props.title} width="560" height="315" src={`${props.link}?autoplay=${props.autoplay}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
const Podcast = (props) => {
  const [selectedVideo,setSelectedVideo]= useState(videos[0]);
  const [autoplay, setAutoplay] = useState(0);
return <>
  <section id="podcast">
    <h1>
   <FaPodcast/> Podcast</h1>
    <div className='maincontent' >
    <FlavorText book="Romans" chapter="10" verse="14" text="...how shall they hear without a preacher?"/>
      <YouTubeEmbed title={selectedVideo.title} link={selectedVideo.link} autoplay={autoplay} />
      <ul>
      {videos.map((x,i)=><li><a href="#podcast" onClick={(e)=>{ setSelectedVideo(videos[i]);setAutoplay(1);}}>{x.title}</a></li>)}
      <li> Additional Videos - Facebook - <a href="https://www.facebook.com/pg/RemembranceChurchFortWorth/videos/?ref=page_internal">Remembrance Church Fort Worth</a></li>
      <li> Additional Videos - Facebook - <a href="https://www.facebook.com/pg/RemembranceChurchFortWorth/videos/?ref=page_internal">Remembrance Seventh Day Baptist</a></li>
      </ul>
    </div>
  </section>
</>}
export default Podcast;