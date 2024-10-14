import React, { useState, useRef } from "react";
import "./PoojaPrarambh.css";
import bannerVideo from "../../Assests/videoplayback.mp4";
import ganeshAarti from "../../Assests/Sukh Karta Dukh Harta(PagalWorld.com.sb).mp3";
import thumbnailImage from "../../Assests/ganesha-pooja-at-home-1.jpg";
import dhyaanMantraAudio from "../../Assests/Sukh Karta Dukh Harta(PagalWorld.com.sb).mp3";
import swastiVachanAudio from "../../Assests/Sukh Karta Dukh Harta(PagalWorld.com.sb).mp3";
import { BsYoutube } from "react-icons/bs";
import { FaFilePdf, FaShareAlt } from "react-icons/fa";
import gifImage from "../../Assests/gifaarti.gif";

const PoojaPrarambh = ({ closeModal }) => {
  const [showPdf, setShowPdf] = useState(false); // State to toggle PDF view
  const [activeStep, setActiveStep] = useState(null); // State to control the active step
  const [playingStep, setPlayingStep] = useState(null); // State to track which step's audio is playing
  const [showMantraDetails, setShowMantraDetails] = useState(false); // State to toggle Mantra details pop-up
  const audioRefs = useRef([]); // Refs to control multiple audios

  // List of pooja steps with mantras and corresponding audio files
  const poojaSteps = [
    {
      title: "DHYAAN/SMARAN",
      mantra: (
        <>
          <b>Meditation/Remembering Mantra</b>
          <br />ॐ मंगलं भगवान विष्णुर्मंगलं गरुणध्वजः...
        </>
      ),
      audio: dhyaanMantraAudio,
      gif: gifImage,
      details:
        "This mantra is for meditation and remembering the divine power.",
    },
    {
      title: "SUDDHI KARAN",
      mantra: (
        <>
          <b>AACHMAN</b>
          <br />ॐ केशवाय नमः, ॐ नारायणाय नमः...
        </>
      ),
      audio: swastiVachanAudio,
      details: "This mantra is used for cleansing and purification.",
    },
    // Add more steps as required...
  ];

  // Function to handle step click and toggle mantra display
  const handleStepClick = (index) => {
    setActiveStep(index === activeStep ? null : index); // Toggle the step
  };

  // Function to play/pause the audio for a specific step
  const toggleAudio = (index) => {
    const currentAudio = audioRefs.current[index];

    if (currentAudio) {
      if (!currentAudio.paused) {
        // If the audio is playing, pause it
        currentAudio.pause();
        setPlayingStep(null); // No audio is playing
      } else {
        // If another audio is playing, pause it first
        if (playingStep !== null && audioRefs.current[playingStep]) {
          audioRefs.current[playingStep].pause();
        }
        // Play the selected audio
        currentAudio.play();
        setPlayingStep(index); // Track the step that is playing
      }
    }
  };

  // Function to handle showing mantra details in pop-up
  const showDetailsPopup = (index) => {
    setShowMantraDetails(true);
    setActiveStep(index);
  };

  const handleDetailsToggle = (index) => {
    setShowMantraDetails(!showMantraDetails); // Toggle the details visibility
    setActiveStep(index); // Ensure correct step is active
  };

  // Function to handle moving to the next mantra
  const nextMantra = (index) => {
    const nextStep = index + 1 < poojaSteps.length ? index + 1 : 0; // Loop to the first step
    setActiveStep(nextStep);
  };

  return (

    
    <div className="pooja-prarambh-container">

<h2>पूजा विधि</h2>


      {/* Conditional Rendering for Video or Audio */}
      <div className="video-banner">
        <video
          src={bannerVideo}
          className="banner-video"
          controls
          poster={thumbnailImage}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <button className="modal-close-btn" onClick={closeModal}>
        &times;
      </button>

      <div className="content-details">
        <h2 className="pooja-title">Ganesh Sankasthi Chaturthi</h2>
        <p className="pooja-date">Aug 12, 2024</p>

        {/* Buttons Section */}
        <div className="button-section">
          <a
            href="https://youtu.be/fZTw4oie5NE?si=eP7XkpopabsD_bR9"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <BsYoutube />
          </a>

          {/* PDF Download Link */}
          <a
            href={require("../../Assests/Ganesh-Pujan-Vidhi.pdf")}
            download="Ganesh-Pujan-Vidhi.pdf"
            className="icon-link"
            onClick={() => setShowPdf(!showPdf)}
          >
            <FaFilePdf />
          </a>

          <a href="" className="icon-link">
            <FaShareAlt />
          </a>
        </div>

        {/* Audio Controls */}
        <div className="audio-controls">
          <audio controls>
            <source src={ganeshAarti} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Conditional PDF Viewer */}
        {showPdf && (
          <div className="pdf-viewer">
            <iframe
              src={require("../../Assests/Ganesh-Pujan-Vidhi.pdf")}
              width="100%"
              height="600px"
              title="PDF Viewer"
            />
          </div>
        )}

        {/* Pooja Steps Section */}
        <div className="pooja-steps">
          {poojaSteps.map((step, index) => (
            <div key={index}>
              <h3
                className="pooja-step-title"
                onClick={() => handleStepClick(index)}
              >
                {step.title}
                <span className="toggle-arrow">
                  {activeStep === index ? "▼" : "▶"}
                </span>
              </h3>

              {/* Display mantra, gif, and button to play/pause audio when the step is active */}
              {activeStep === index && (
                <div className="mantra-section">
                  <div className="mantra-gif-container">
                    <p className="mantra-text">{step.mantra}</p>
                    {step.gif && (
                      <img src={step.gif} alt="Pooja Step Gif" className="pooja-gif" />
                    )}
                  </div>
                  
                  {/* Button Group in One Line */}
                  <div className="button-group">
                    <button
                      className={`play-audio-button ${playingStep === index ? "playing-audio-button" : ""}`}
                      onClick={() => toggleAudio(index)}
                    >
                      {playingStep === index ? "Pause Mantra Audio" : "Play Mantra Audio"}
                    </button>
                    <button className="details-button" onClick={() => handleDetailsToggle(index)}>
                      {showMantraDetails && activeStep === index ? "Hide Mantra Details" : "Show Mantra Details"}
                    </button>
                    <button className="next-mantra-button" onClick={() => nextMantra(index)}>
                      Next Mantra
                    </button>
                  </div>

                  {/* Mantra Details Pop-up Below Button */}
                  {showMantraDetails && activeStep === index && (
                    <div className="mantra-details-popup">
                      <h3>{step.title} Details</h3>
                      <p>{step.details}</p>
                      {/* Close Button */}
                      {/* <button className="close-popup-button" onClick={() => setShowMantraDetails(false)}>
                        Close
                      </button> */}
                    </div>
                  )}

                  <audio ref={(el) => (audioRefs.current[index] = el)}>
                    <source src={step.audio} type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PoojaPrarambh;


// const poojaSteps = [
//   {
//     title: "DHYAAN/SMARAN",
//     mantra: (
//       <>
//         <b>Meditation/Remembering Mantra</b>
//         <br />
//         <br />
//         First Of All, Sit In Front Of God And Meditate On God Through The
//         Following Mantras.
//         <br />
//         <br />
//         ॐ मंगलं भगवान विष्णुर्मंगलं गरुणध्वजः।
//         <br />
//         मंगलं पुण्डरी काक्षो, मङ्गलाय तनो हरिः।
//         <br />
//         <br />
//         ॐ मंगलं भगवान् शंभुर्मंगलं वृषभध्वजः।
//         <br />
//         मंगलं पार्वती नाथो मंगलायतनं हरः।।
//       </>
//     ),
//     audio: dhyaanMantraAudio,
//     gif: gifImage,
//   },
//   {
//     title: "SUDDHI KARAN",
//     mantra: (
//       <>
//         <b>AACHMAN</b>
//         <br />
//         <br />
//         Take Water Three Times While Chanting The Following Mantras-
//         <br />
//         <br />
//         ॐ केशवाय नम:
//         <br />
//         ॐ नाराणाय नम:
//         <br />ॐ माधवाय नम:
//         <br />
//         <br />
//         <b>Wash Hands</b>
//         <br />
//         <br />
//         Perform Hand Circumambulation (wash Hands) While Chanting The
//         Following Mantra.
//         <br />
//         <br />ॐ ह्रषीकेशाय नम:
//         <br />
//         <br />
//         <b>Sanctification</b>
//         <br />
//         <br />
//         Again Take Water In The Left Hand And Sprinkle It On Yourself And On
//         The Worship Material With The Right Hand While Reciting The Following
//         Verses.
//         <br />
//         <br />
//         ॐ अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा। <br />
//         यः स्मरेत् पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः॥
//         <br />ॐ पुण्डरीकाक्षः पुनातु, ॐ पुण्डरीकाक्षः पुनातु, ॐ पुण्डरीकाक्षः
//         पुनातु।
//         <br />
//         <br />
//         <b>Asana Purification</b>
//         <br />
//         <br />
//         Release Water On The Asana While Reciting The Following Mantra. <br />
//         <br />
//         ॐ पृथ्वि! त्वया धृता लोका देवि ! त्वं विष्णुना धृता। <br />
//         त्वं च धारय मां देवि ! पवित्रं कुरु चासनम्।। <br />
//         <br />
//         <b>PAVITRI DHARAN</b> <br />
//         <br />
//         Wear The Sanctity Of Kusha With The Following Mantra. <br />
//         <br />
//         ॐ पवित्रेस्थो वैष्णव्यौ सवितुर्वः प्रसव उत्पुनाम्यच्छिद्रेण पवित्रेण
//         सूर्यस्य रश्मिभिः। <br />
//         तस्य ते पवित्रपते पवित्र पूतस्य यत्कामः पुने तच्छकेयम्।
//       </>
//     ),
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "SWASTI TILAK",
//     mantra: (
//       <>
//         <b> Swasti Tilak </b>
//         <br />
//         <br />
//         Apply Tilak To Yourself With The Mantra Written Below. <br />
//         <br />
//         केशवानन्त गोविन्द बाराह पुरुषोत्तम। <br />
//         पुण्यं यशस्यमायुष्यं तिलकं मे प्रसीदतु।।
//         <br />
//         <br />
//         <b>Shikha Bandhan</b>
//         <br />
//         <br />
//         Touch The Shikha (peak) By Reading The Mantra Written Below. <br />
//         <br />
//         ॐ चिद्रूपिणि महामाये दिव्यतेजः समन्विते। <br />
//         तिष्ठ देवि शिखामध्ये तेजोवृद्धिं कुरुष्व मे।।
//       </>
//     ),
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "RAKSHA SOOTRA/GRANTHI BANDHAN",
//     mantra: (
//       <>
//         <b>Rakshasutra Bandhan</b>
//         <br />
//         <br />
//         Tie The Kalava (molly) In Your Hand With The Following Mantra. <br />
//         <br />
//         येन बद्धो बलि राजा, दानवेंद्रो महाबलः, <br />
//         तेन त्वामनु बध्नामि, रक्षे माचल माचल:। <br />
//         <br />
//         <b>Gland Bandhan</b>
//         <br />
//         <br />
//         If You Are Doing The Worship Of Your Wife, Then Read The Mantra
//         Written Below And Tie A Knot By Placing Rice, Flowers, Coins, Betel
//         Nut In Chunri And Handkerchief.
//         <br />
//         <br />
//         येन बद्धो बलि राजा, दानवेंद्रो महाबलः,
//         <br />
//         तेन त्वामनु बध्नामि, रक्षे माचल माचल:।
//       </>
//     ),
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "SWASTI VAACHAN",
//     mantra: (
//       <>
//         <b>Swasti-vaachan</b>
//         <br />
//         <br />
//         While Reciting The Swastivachan Mantras Written Below, Meditate In The
//         Mind Of Your Favorite Deity, Kuldevata, With A Bouquet In Your Hand.
//         <br />
//         <br />
//         हरिः ॐ भद्रं कर्णेभिः शृणुयाम देवा भद्रं पश्येमाक्षभिर्यजत्राः।
//         स्थिरैरङ्गैस्तुष्टुवा गुं सस्तनुभिर्व्यशेमहि देवहितं यदायुः।। <br />
//         <br />
//         शतमिन्नु शरदो अन्ति देवा यत्रा नश्चक्रा जरसं तनूनाम्। पुत्रासो यत्र
//         पितरो भवन्ति मानो मध्या रीरिषतायुर्गन्तोः।। <br />
//         <br />
//         अदितिर्द्यौरदितिरन्तरिक्षमदितिर्माता स पिता स पुत्रः। विश्वे देवा
//         अदितिः पञ्चजना अदितिर्जातमदितिर्जनित्वम्।। <br />
//         <br />
//         ॐ द्यौः शान्तिरन्तरिक्ष गुं शान्तिः पृथिवी शान्तिरापः शान्तिरोषधयः
//         शान्तिर्व्वनस्पतयः शान्तिर्विश्वेदेवाः शान्तिर्ब्रह्मशान्तिः सर्वं गुं
//         शान्तिः शान्तिरेव शान्तिः सा मा शान्तिरेधि।। <br />
//         <br />
//         यतो यतः समीहसे ततो नोऽअभयं कुरू। शं नः कुरु प्रजाभ्योऽभयं नः
//         पशुब्भ्यः।। सुशान्तिर्भवतु।। ॐ शान्तिः शान्तिः शान्तिः॥ <br />
//         <br />
//         ॐ श्रीमन्महागणाधिपतये नमः। ॐ लक्ष्मीनारायणाभ्यां नमः। ॐ
//         उमामहेश्वराभ्यां नमः। ॐ वाणीहिरण्यगर्भाभ्यां नमः। ॐ शचीपुरन्दराभ्यां
//         नमः। ॐ <br />
//         मातापितृचरणकमलेभ्यो नमः। ॐ श्रीमद्गुरुचरणकमलेभ्यो नमः। ॐ इष्टदेवताभ्यो
//         नमः। ॐ कुलदेवताभ्यो नमः। ॐ ग्रामदेवताभ्यो नमः। ॐ स्थानदेवताभ्यो नमः। ॐ{" "}
//         <br />
//         वास्तुदेवताभ्यो नमः। ॐ एतद् कर्मप्रधानदेवताभ्यो नमः। ॐ सर्वेभ्यो
//         देवेभ्यो नमः। ॐ सर्वेभ्यो ब्राम्हणेभ्यो नमः।
//         <br />
//         <br />
//         एतद् कर्म प्रधानाय सांगाय सपरिवराय सायुधाय सशक्तिकाय सवाहनाय भगवते
//         गजाननाय नमः। <br />
//         <br />
//         वक्रतुण्ड महाकाय, सूर्यकोटि समप्रभ । <br />
//         <br />
//         निर्विघ्नं कुरु मे देव, सर्वकार्येषु सर्वदा ।।
//       </>
//     ),
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "PUJAN SANKALP",
//     mantra: (
//       <>
//         <b>संकल्प Resolution</b>
//         <br />
//         <br />
//         Take A Pledge To Worship With Water, Gandh, Akshat, Flowers, Round
//         Betel Nut, Rupee (liquid) In The Right Hand. (Chant The Name Vishnu
//         Three Times.) And Wherever Amuk Words Come, They Should Speak Places,
//         Clans, Names, Etc. <br />
//         As- <br />
//         अमुक स्थाने - Location Name <br />
//         अमुक संवत्सरे - Samvatsar Name <br />ॐ विष्णुर्विष्णुर्विष्णु:
//         श्रीमद्भगवतो महापुरुषस्य विष्णोराज्ञया प्रवर्त्त मानस्य अद्य
//         ब्रह्मणोऽह्नि द्वितीय परार्धे श्रीश्वेतवाराहकल्पे सप्तमे
//         वैवस्वतमन्वन्तरे अष्टाविंशतितमे कलियुगे, कलिप्रथम चरणे जम्बूद्वीपे
//         भरतखण्डे भारतवर्षे आर्यवर्तान्तर्गत ब्रम्हवर्तैकदेशे पुण्यप्रदेशे अमुक
//         प्रदेशे (अपने प्रदेश का नाम लें) अमुक क्षेत्रे (अपने क्षेत्र का नाम
//         लें) वर्तमाने ........ विक्रमाब्दे बौद्धावतारे अमुक नाम संवत्सरे
//         श्रीसूर्य ...... आयने अमुक……. ऋतौअमुक मासे ..अमुक पक्षे….. अमुक वासरे।
//         ... अमुक नक्षत्रे ग्रहेषु यथायथं राशिस्थानस्थितेषु सत्सु एवं ग्रह
//         गुणगण विशेषेण विशिष्टायां शुभपुण्यतिथौ। ........ अमुक गोत्रः (गोत्र का
//         नाम लें) गोत्रोत्पन्नोऽहं अमुकनाम ...... (अपना नाम लें) आत्मनः
//         बान्धवाः सहितोहं सकलशास्त्र श्रुतिस्मृति पुराणोक्त,वेदोक्त,शास्त्रोक्त
//         फलप्राप्तयर्थं ऐश्वर्याभिवृद्धयर्थं अप्राप्त लक्ष्मी प्राप्त्यर्थं
//         प्राप्त लक्ष्म्याः चिरकाल संरक्षणार्थं सकल मन ईप्सित कामना
//         संसिद्धयर्थं लोके सभायां राजद्वारे व्यापारे, गृहे वा सर्वत्र यशो विजय
//         लाभादि प्राप्तयर्थं इह जन्मनि जन्मान्तरे वा सकल दुरितोपशामनार्थं मम
//         सपरिवारस्य आयुरारोग्यैश्वर्यविध्यर्थं आदित्यदि नवग्रहानुकूलता
//         सिध्यर्थं त्रिविध तापोपशामनार्थं धर्मार्थकाममोक्ष फलप्राप्त्यर्थं च।
//         सपरिवारस्य सर्वसंकष्टनिवारणार्थं श्री गणपतिप्रसाद सिद्धये
//         संकष्टहरचतुर्थीव्रतांगत्वेन गणेशप्रतिमायां श्री गणपतिदेवस्य पूजनं
//         करिष्ये।
//       </>
//     ),
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "DEEPAK, PRITHVI PUJAN",
//     mantra: (
//       <>
//         <b>Lamp Worship</b>
//         <br />
//         <br />
//         Light A Ghee Lamp In The Northeast Direction In An Airless Place And
//         Place It On Top Of The Akshat And Worship It. With The Following
//         Mantra.
//         <br />
//         <br />
//         भो दीपदेव रूपस्त्वं कर्मसाक्षी ह्यविघ्नकृत।
//         <br />
//         यावत्पूजा समाप्तिः स्यात् तावदत्र स्थिरो भव।। <br />ॐ भूर्भुवः स्वः
//         दीपस्थदेवतायै नमः, सर्वोपचारार्थे, गन्धाक्षतपुष्पाणि समर्पयामि
//         नमस्करोमि।
//       </>
//     ),
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "SHANKH, GARUN GHANTI PUJAN",
//     mantra: (
//       <>
//         <b>Bell Worship</b>
//         <br />
//         <br />
//         With The Following Mantra, Worship The Bell With Water, Smell, Akshat
//         In A Flower. Ring The Bell. <br />
//         <br /> ॐ आगमार्थं तु देवानां गमनार्थं तु रक्षसाम्। <br />
//         घण्टानादं प्रकुर्वीत पश्चाद् घण्टां प्रपूजयेत् ।। <br />
//         ॐ भूर्भुवः स्वः घण्टास्थाय गरुणाय नमः आवाहयामि, सर्वोपचारार्थे,
//         गन्धाक्षतपुष्पाणि समर्पयामि नमस्करोमि।
//         <br />
//         <br />
//         <b>Conch Puja</b>
//         <br />
//         <br />
//         Worship The Conch With Water, Smell, Akshat In A Flower With The
//         Following Mantra. Pray By Placing It On A Flower On The Left Side Of
//         The Deity. <br />
//         <br />
//         पाञ्चजन्याय विद्महे पावमानाय धीमहि तन्नः शंखः प्रचोदयात्। <br />ॐ
//         भूर्भुवः स्वः शंखस्थदेवतायै नमः शंखस्थदेवतामावाहयामि सर्वोपचारार्थे
//         गन्धपुष्पाणि समर्पयामि नमस्करोमि।
//       </>
//     ),
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "GANESH POOJA",
//     mantra: "स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः...",
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "KALASH POOJA",
//     mantra: "स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः...",
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "SHODASH MATRIKA PUJAN",
//     mantra: "स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः...",
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "NAVGRAH PUJAN",
//     mantra: "स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः...",
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "PRAMUKH POOJA",
//     mantra: "स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः...",
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "VRAT KATHA",
//     mantra: "स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः...",
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "HAVAN TAIYARI",
//     mantra: "स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः...",
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "HAVAN VIDHI",
//     mantra: "स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः...",
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "AARTI",
//     mantra: "स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः...",
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "KARPOOR AARTI",
//     mantra: "स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः...",
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "PUSHPANJALI",
//     mantra: "स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः...",
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "KSHAMA YACHNA",
//     mantra: "स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः...",
//     audio: swastiVachanAudio,
//   },
//   {
//     title: "VISARJAN",
//     mantra: "स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः...",
//     audio: swastiVachanAudio,
//   },
//   // Add more steps as required with their respective mantra and audio
// ];
