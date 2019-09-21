import React from 'react';
import FlavorText from './flavor-text';
import { FaPodcast } from 'react-icons/fa';
const Podcast = (props) => <>
  <section id="podcast">
    <h1>
   <FaPodcast/> Podcast</h1>
    <div className='maincontent' >
    <FlavorText book="Romans" chapter="10" verse="14" text="...how shall they hear without a preacher?"/>

    <iframe title="01/02/2010 Titus 3:1-7 Be a Good Citizen" width="560" height="315" src="https://www.youtube.com/embed/0-ZxV-h1_QE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe title="05/29/2010 Hosea 10:1-8 Sea-foam Religion" width="560" height="315" src="https://www.youtube.com/embed/-JDZoU_SHPk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe title="12/04/2010 Revelation 2:8-11 - The Persecuted Church" width="560" height="315" src="https://www.youtube.com/embed/msvRgTz2H4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      
    <iframe title="01/08/2011 Revelation 3:1-6 The Church of the Living Dead" width="560" height="315" src="https://www.youtube.com/embed/1U9cCJj-5YA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe title="03/05/2011 Revelation 6:12-17 The Sixth Seal - The Nature of the Heavens are Changed" width="560" height="315" src="https://www.youtube.com/embed/GSDVfq4h7rY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe title="07/16/2011 Revelation 17;1-18 Ding Dong the Whore is Dead" width="560" height="315" src="https://www.youtube.com/embed/bdNZfBzGTio" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe title="08/27/2011 Revelation Revelation 20:1-6 The Millenium" width="560" height="315" src="https://www.youtube.com/embed/ru7SnCQT8iA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe title="09/24/2011 Revelation 22:1-10 The Future is Similar to the Garden of Eden" width="560" height="315" src="https://www.youtube.com/embed/TyV8nNP3ZVc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
        
{/*
    
        <li><a href='resources/podcast/010910titus3verses8thru15.mp3' >01/09/2010 Titus 3:8-15 Accentuate the Positive and Avoid the Negative</a></li>
        <li><a href='resources/podcast/01152011revelation3verses7thru13.mp3' >09 Revelation - Sermon 01/15/2011 Revelation 3:7-13 The Church at Philadelphia</a></li>
        <li><a href='resources/podcast/01162010Genesis2Mark2Sabbath.mp3' >01/16/2010 The Sabbath is a Benefit to Man</a></li>
        <li><a href='resources/podcast/01222011revelation3verses14thru22thevomitedchurch.mp3' >10 Revelation - Sermon 01/22/2011 Revelation 3:14-22 The Vomited Church</a></li>
        <li><a href='resources/podcast/012310sabbaththeology2.mp3' >01/23/2010 Sabbath Theology Part 2 (Col. 2, Gal. 4, and Rom. 14)</a></li>
        <li><a href='resources/podcast/01292011revelationchapter4v1thru11.mp3' >11 Revelation - Sermon 01/29/2011 Revelation 4:1-11 God Alone is Worthy</a></li>
        <li><a href='resources/podcast/01302010hosea1spiritualharlotry.mp3' >01/30/2010 Hosea 1  Spiritual Harlotry</a></li>
        <li><a href='resources/podcast/02062010hosea2verses1thru13thetrialofIsrael.mp3' >02/06/2010 Hosea 2:1-13 The Trial of Israel</a></li>
        <li><a href='resources/podcast/02122011revelationchapter5v1thru13.mp3' >12 Revelation - Sermon 02/12/2011 Revelation 5:1-13 The Lamb Alone is Worthy to Open the Revelation </a></li>
        <li><a href='resources/podcast/02132010hosea2verses14thru23thesongofreconcilliation.mp3' >02/13/2010 Hosea 2:14-23 The Song of Reconciliation</a></li>
        <li><a href='resources/podcast/02192011revelationchapter6v1thru8.mp3' >13 Revelation - Sermon 02/19/2011 Revelation 6:1-8 The Hoof Beats of Approaching Judgement</a></li>
        <li><a href='resources/podcast/02262011revelationchapter6v9thru11.mp3' >14 Revelation - Sermon 02/26/2011 Revelation 6:9-11 The Fifth Seal the Martyrdom of Christians</a></li>
        <li><a href='resources/podcast/02272010Hosea3isrealspenalty.mp3' >02/27/2010 Hosea 3:1-5 Israel Will Seek Her King</a></li>
        <li><a href='resources/podcast/03062010hosea4verses1thru5badpriestsbadtheology.mp3' >03/06/2010 Hosea 4:1-5 Bad Priests Bad Theology</a></li>
        <li><a href='resources/podcast/03122011revelationchapter7v1thru17.mp3' >16 Revelation - Sermon 03/12/2011 Revelation 7:1-17 Intermission: The Sealing of the Saints</a></li>
        <li><a href='resources/podcast/03132010hosea4verses6thru19.mp3' >03/13/2010 Hosea 4:6-19 God is the Source of All Knowledge</a></li>
        <li><a href='resources/podcast/03192011revelationchapter8v1thru11.mp3' >17 Revelation - Sermon 03/19/2011 Revelation 8:1-11 The Seventh Seal - The First 3 Trumpets</a></li>
        <li><a href='resources/podcast/03202010hosea5verses1thru7.mp3' >03/20/2010 Hosea 5:1-7 Sin is a Trap</a></li>
        <li><a href='resources/podcast/03262011revelationchapter8v12thru13.mp3' >18 Revelation - Sermon 03/26/2011 Revelation 8:12-13 The Fourth Trumpet and Preparation for the First Woe</a></li>
        <li><a href='resources/podcast/03272010matthew27verses26thru50thedeathofchrist.mp3' >03/27/2010 Matthew 27:26-50  The Death of Christ - Lord's Supper Service</a></li>
        <li><a href='resources/podcast/04032010hosea5verses8thru15.mp3' >04/03/2010 Hosea 5:8-15 Living on the Boarder of Sin</a></li>
        <li><a href='resources/podcast/04092011revelationchapter9v1thru12.mp3' >19 Revelation - Sermon 04/09/2011 Revelation 9:1-12 The Fifth Trumpet - The First Woe - Judgement of the World - Protection of the saints</a></li>
        <li><a href='resources/podcast/04102010hosea6verses1thru11.mp3' >04/10/2010 Hosea 6:1-11 Hewn Stones</a></li>
        <li><a href='resources/podcast/04162011revelationchapter9v13thru21.mp3' >20 Revelation - Sermon 04/16/2011 Revelation 9:13-21 The Sixth Trumpet - The Second Woe</a></li>
        <li><a href='resources/podcast/04172010hosea7verses1thru12.mp3' >04/17/2010 Hosea 7:1-12 Sin is Addictive</a></li>
        <li><a href='resources/podcast/04232011revelationchapter10v1thru11.mp3' >21 Revelation - Sermon 04/23/2011 Revelation 10:1-11 Intermission: The Little Book</a></li>
        <li><a href='resources/podcast/04242010hosea7verse13thruchapter8verse14.mp3' >04/24/2010 Hosea 7:13-8:14 Caught In The Whirlwind</a></li>
        <li><a href='resources/podcast/05012010hosea9verses1thru9.mp3' >05/01/2010 Hosea 9:1-9 Blasphemous worship</a></li>
        <li><a href='resources/podcast/05072011revelationchapter11v1thru14.mp3' >22 Revelation - Sermon 05/07/2011 Revelation 11L1-14 Two Witnesses</a></li>
        <li><a href='resources/podcast/05082010hosea9verses10thru17.mp3' >05/08/2010 Hosea 9:10-17 Wild vine</a></li>
        <li><a href='resources/podcast/05142011revelationchapter11v15thru19.mp3' >23 Revelation - Sermon 05/14/11 Revelation 11:15-19 The Seventh Trumpet</a></li>
        <li><a href='resources/podcast/05152010john14verse1thru14.mp3' >05/15/2010 John 14:1-14 Let not your heart be troubled</a></li>
        <li><a href='resources/podcast/05212011revelationchapter12v1thru17.mp3' >24 Revelation - Sermon 05/21/2011 Revelation 12:1-17 The Women Representing Believers in All Ages</a></li>
        <li><a href='resources/podcast/05222010ecclesiastesthewholebook.mp3' >05/22/2010 Ecclesiastes 1:1-12:14 Life Under the sun</a></li>
        <li><a href='resources/podcast/05282011revelationchapter13v1thru18.mp3' >25 Revelation - Sermon 05/28/2011 Revelation 13:1-18 The Beast System</a></li>
       <li><a href='resources/podcast/06042011revelationchapter14v1thru20.mp3' >26 Revelation - Sermon 06/04/2011 Revelation 14:1-20 The Harvest of the Earth</a></li>
        <li><a href='resources/podcast/06112011revelationchapter15v1thru18.mp3' >27 Revelation - Sermon 07/20/0911 Revelation 15:1-8 Preparation for the Wrath of God</a></li>
        <li><a href='resources/podcast/06122010hosea10verses9thru15.mp3' >Sermon 06/12/2010 Hosea 10:9-15 Repent of long-term sin</a></li>
        <li><a href='resources/podcast/06192010hosea11verses1thru12.mp3' >Sermon 06/19/2010 Hosea 11:1-12 Punishment and Repentance (Long term sin Part II)</a></li>
        <li><a href='resources/podcast/06262010hosea12verses1thru14.mp3' >Sermon 06/26/2010 Hosea 12:1-14 Chasing the Wind</a></li>
        <li><a href='resources/podcast/07022011revelationchapter16v1thru10.mp3' >28 Revelation - Sermon 07/02/2011 Revelation 16:1-10 The Seven Last Plagues Part 1</a></li>
        <li><a href='resources/podcast/07092011revelationchapter16v11thru20.mp3' >29 Revelation - Sermon 07/09/2011 Revelation 16:11-20 The Seven Last Plagues Part 2</a></li>
         <li><a href='resources/podcast/08062011revelationchapter18v1thru24.mp3' >31 Revelation - Sermon 08/13/2011 Revelation 18:1-24 Babylon has Fallen</a></li>
        <li><a href='resources/podcast/08132011revelationchapter19v1thru10.mp3' >32 Revelation - Sermon 08/13/2011 Revelation 19:1-10 Alleluia</a></li>
        <li><a href='resources/podcast/08202011revelationchapter19v11thru21.mp3' >33 Revelation - Sermon 08/20/2011 Revelation 19:11-21 The Return of Christ as King of Kings</a></li>
        <li><a href='resources/podcast/09032011revelationchapter20v7thru15.mp3' >35 Revelation - Sermon 09/03/11 Revelation 20:7-15 The White Throne Judgement</a></li>
        <li><a href='resources/podcast/09102011revelationchapter21vs1thru8.mp3' >36 Revelation - Sermon 09/10/2011 Revelation Revelation 21:1-8 Introduction to the New Heavens and the New Earth</a></li>
        <li><a href='resources/podcast/09172011revelationchapter21vs9thru27.mp3' >37 Revelation - Sermon 09/17/2011 Revelation 21:9-27 The Holy City of God New Jerusalem</a></li>
        <li><a href='resources/podcast/10012011revelationchapter22vs11thru21.mp3' >39 Revelation - Sermon10/01/2011 Revelation 22:11-21 Closing Salutation</a></li>
        <li><a href='resources/podcast/11072010revelationchapter1v1t3.mp3' >01 Revelation - Sermon 11/07/2010 Revelation 1:1-3 - Introduction Part I 11/21/2010 11:00AM</a></li>
        <li><a href='resources/podcast/11142010revelationchapter1v4.mp3' >02 Revelation - Sermon 11/14/2010 Revelation 1:4ff - Introduction Part II</a></li>
        <li><a href='resources/podcast/11212010revelationchapter1v9t20.mp3' >03 Revelation - Sermon 11/21/2010 Revelation Chapter 1:9-20 - The Vision</a></li>
        <li><a href='resources/podcast/11282010revelationchapter2v1t7.mp3' >04 Revelation - Sermon 11/28/2010 Revelation Chapter 2:1-7 - Message to the Church at Ephesus</a></li>
         <li><a href='resources/podcast/120509titus1introduction.mp3' >12/05/2009 Titus 1:1-4 God is The Only Authority</a></li>
        <li><a href='resources/podcast/12112010revelation2verses12thru17.mp3' >06 Revelation - Sermon 12/11/10 Revelation 2:12-17 - The Compromising Church</a></li>
        <li><a href='resources/podcast/121209titus1_5-9troubleandpastors.mp3' >12/12/09 Titus 1:5-9 Trouble Demands Godly People to Serve</a></li>
        <li><a href='resources/podcast/12182010revelation2verses18thru29.mp3' >07 Revelation - Sermon 12/18/2010 Revelation 2:18-29 The Church with that women Jezebel</a></li>
        <li><a href='resources/podcast/121909titus1verses10thru16stoptheirmouths.mp3' >12/19/2009 Titus 1:10-16 Stop the Mouths of the Gainsayers</a></li>
        <li><a href='resources/podcast/122609tituschapter2.mp3' >12/26/2009 Titus 2:1-15 Proper Instructions for a Proper People of God</a></li>
        <li><a href='resources/podcast/1peter2howtolive.mp3' >10/15/2005 Peter 3:1-12 How To Live Holy Lives</a></li>
        <li><a href='resources/podcast/1peter4thesufferingofchristr2.mp3' >11/05/2005 I Peter 4:10-19 the Suffering of Christ</a></li>
        <li><a href='resources/podcast/2samuel1lossofheros.mp3' >11/26/2005 II Samuel 1:1-27  Loss of Heros</a></li>
        <li><a href='resources/podcast/3johnrev3.mp3' >10/18/2008 III John - A Few Good Men</a></li>
        <li><a href='resources/podcast/mark14thetrialofjesus.mp3' >03/21/2009 Mark 14:53-65 the Trial of Jesus</a></li>
        <li><a href='resources/podcast/mark9afraid.mp3' >11/01/2008 Mark 9:30-37  Afraid of ignorance</a></li>
        <li><a href='resources/podcast/mark9chaoticsituation.mp3' >10/25/2008 Mark 9:14-28 Chaotic Situation</a></li>
        <li><a href='resources/podcast/mark9end.mp3' >11/15/2008 Mark 9:38-50  Don't Be Offensive</a></li>
        <li><a href='resources/podcast/mark9greatestinkingdom.mp3' >11/08/2008 Mark 9:33-37  Greatest in kingdom</a></li>
        <li><a href='resources/podcast/sermon0731102thessalonians1_introduction_falseteaching.mp3' >07/31/10 II Thessalonians 1:1-12 Introduction beware of False Teaching -  Dr. Bill Burks D.B.L.</a></li>
        <li><a href='resources/podcast/sermon0807102thessalonians2_1_12themanofsin.mp3' >Sermon 08/07/10 II Thessalonians 2:1-12 The Man of Sin -  Dr. Bill Burks D.B.L.</a></li>
        <li><a href='resources/podcast/sermon081410john17_3knowinggod.mp3' >08/14/10 John 17:3  Knowing God</a></li>
        <li><a href='resources/podcast/sermon0821102thessalonians2_12_17comfortIntroubledtimes.mp3' >Sermon 08/21/10 II Thessalonians 2:12-17 Comfort In Troubled Times -  Dr. Bill Burks D.B.L.</a></li>
        <li><a href='resources/podcast/sermon092510mark115broarce.mp3' >Sermon 09/25/10 Mark 1:15 Repent and Believe the Gospel -  Bro. Alberto Arce</a></li>
        <li><a href='resources/podcast/sermonswadrbillburks06052010.mp3' >Sermon SWA 06/05/2010 John 1:1-3 and 14 The Use of the Word of God in Preaching the Gospel - Dr. Bill Burks D.B.L.</a></li>
        <li><a href='resources/podcast/thesiiendofbook.mp3' >Sermon 08/28/2010 Second Thessalonians - Wrap Up</a></li>  */}
        </div>
  </section>
</>
export default Podcast;