var data5Url2 = `sno,subject,description,shorturl,longurl
01,फिरादपत्र,सम्बन्धविच्छेद-नेन्सी महतो,open pdf file,DOCPDF/फिरादपत्र नेन्सी महतो final.pdf
02,पारिश्रमिक उपलब्ध गराई पाउँ,निवेदन,open pdf file,DOCPDF/IMG-8573479de6a7b08000e747ad56b26bbe-V.pdf
03,online तारेखको सुविधा पाउँ,निवेदन,open pdf file,DOCPDF/online तारेख निवेदन २०८१.pdf
04,अधिवक्ता-तहको-२९-औं-परीक्षाको-लागि-निर्धारित-नजीरहरू,नजिरनिकुञ्ज,open pdf file,DOCPDF/अधिवक्ता-तहको-२९-औं-परीक्षाको-लागि-निर्धारित-नजीरहरू.pdf
05,मञ्जुरीनामा-नेपाल ल क्याम्पस,धरौटि रकम फिर्ता ,open pdf file,DOCPDF/मञ्जुरीनामा.pdf
06,28 bar word file editing for 29 exam,NajirNikunja,open doc file,DOCWORD/28 bar word file editing for 29 exam.docx
07,29 the Bar Exam New Najir Only,NajirNikunja,open doc file,DOCWORD/29 the Bar Exam New Najir Only.docx
08,office book entri law firm and Room 2082,Book Entry,open doc file,DOCWORD/office book entri law form and Room 2082.docx
09,खममाया बुढा  रामु दाहाल 07.23.2020.11ः00. final,चेक अनादर फिरादपत्र,open doc file,DOCWORD/खममाया बुढा  रामु दाहाल 07.23.2020.11ः00. final.docx
10,फिरादपत्र नेन्सी महतो final,सम्बन्धविच्छेद,open doc file,DOCWORD/फिरादपत्र नेन्सी महतो final.docx
11,विन्दु हुमेन क्षेत्री 07.23.2020.11.35.final,चेक अनादर फिरादपत्र,open doc file,DOCWORD/विन्दु हुमेन क्षेत्री 07.23.2020.11.35.final.docx
12,सञ्जु राज भन्डारी 07.23.2020.11.35.final,चेक अनादर फिरादपत्र,open doc file,DOCWORD/सञ्जु राज भन्डारी 07.23.2020.11.35.final.docx

13,BaVinajuAsmu,dungepatan photo,open image file,Images/BaVinajuAsmu20170215_154633.jpg
14,RamanaRajbiraj,ramanapatra,open image file,Images/RamanaRajbiraj20220525_141829.jpg
15,Upasachib Niyukti,niyuktipatra,open image file,Images/Upasachib Niyukti 20240723_101731.jpg
16,akaladevi3,Image,open image file,Images/akaladevi3.jpg
17,me,Image,open image file,Images/me.png
18,myphoto,Image,open image file,Images/myphoto.jpg
19,prajwal bhai,Image,open image file,Images/prajwal chora 2.jpg

`;

// Dataset metadata
var data5Url2Info = {
    name: "See legal documents",
    description: "Data elements with short and long url",
    emoji: "🔗",
    columns: 5,
    primaryKey: "subject",
    rowColors: {
        // Example: highlight a specific shorturl
        "subject": "blue"
    }
};

// Directory content arrays (for programmatic use)
var DOCPDF_files = [
    "IMG-8573479de6a7b08000e747ad56b26bbe-V.pdf",
    "online तारेख निवेदन २०८१.pdf",
    "अधिवक्ता-तहको-२९-औं-परीक्षाको-लागि-निर्धारित-नजीरहरू.pdf",
    "फिरादपत्र नेन्सी महतो final.pdf",
    "मञ्जुरीनामा.pdf"
];

var DOCWORD_files = [
    "28 bar word file editing for 29 exam.docx",
    "29 the Bar Exam New Najir Only.docx",
    "office book entri law form and Room 2082.docx",
    "खममाया बुढा  रामु दाहाल 07.23.2020.11ः00. final.docx",
    "फिरादपत्र नेन्सी महतो final.docx",
    "विन्दु हुमेन क्षेत्री 07.23.2020.11.35.final.docx",
    "सञ्जु राज भन्डारी 07.23.2020.11.35.final.docx"
];

var Images_files = [
    "BaVinajuAsmu20170215_154633.jpg",
    "RamanaRajbiraj20220525_141829.jpg",
    "Upasachib Niyukti 20240723_101731.jpg",
    "akaladevi3.jpg",
    "me.png",
    "myphoto.jpg",
    "prajwal chora 2.jpg"
];

