## Chris' Rocks

---

### **Description**

Thank you for checking out my HTML, CSS, and Javascript project for Get Coding at: https://celw10.github.io/nl_minearl_expl/. 

Chris' Rocks is an app I built to showcase my rock collection and teach the user about geology. In addition, three other apps explore additional interests, including GIS web development, Optical Character Recognition (OCR), and search functionality through a database. 

---

### **Motivation**

My original intention was to build the framework to solve a problem I encountered at my current job regarding historic mining data. Solving this problem is complex, and after discussing it with my coach, we decided to break the problem into smaller steps and showcased a different app I built, Chris' Rocks. With Chris' Rocks, I wanted to create a visually appealing and immersive app to showcase my rock collection and teach the user about geology. For the other three apps, I wanted to investigate the functionality and the steps necessary to get a working solution to my original problem.

---

### **Usage/Features**

Navigation for Chris' Rocks is shown in the image below. Hover over the rock-type images. You'll see a brief description of each rock type and a popup of the rock type following your cursor. There are three rock types, and I have also included <em>Economic</em>. Further down the page, you'll see a few images of how I collected these rocks. To the left are four buttons that change the layout of the 12 rock samples I've picked to display. If you hover over a rock sample, its name will follow your cursor. Additional information about that sample will appear by clicking on the image. Note that cursor tracking functionality will not work on a mobile device, so please view it on a PC to take in the app's full functionality!

<img width="1264" alt="image" src="https://user-images.githubusercontent.com/34209214/226187193-fec3891b-3837-444d-b8bc-17c722925e7b.png">

Below is an image of the GIS Project's page. Toward the top right of the page, you will see five elements. A search bar, drop-down search tool, a search button, Chris' Rocks, and a menu image. To search through a database, type in a particular historic mining company, for example, <em>Noranda</em>. A footer element will appear after clicking <em>search</em> with the results of your search query. Clicking Chris' Rocks will return you to the main page, and clicking the menu image right of that will open a hidden menu. Clicking on the options in the popup menu will load different background images representative of different types of mineral exploration data.

<img width="1280" alt="image" src="https://user-images.githubusercontent.com/34209214/226187078-47a9f41c-7c7f-43d3-ae63-c3c6a4fed189.png">

The OCR Project uses the Tesseract API to recognize text in images. On the OCR Project page, you may upload only image data in either English, Spanish or French. This image should have some text for the Tesseract OCR algorithm to recognize. Four versions of your uploaded image are generated in addition to the recognized text. These four popups represent typical processing steps during OCR but are not implemented here. There are five example images in the GitHub repo under the directory labelled <em>ocr_examples</em> under <em>images</em>, or you may follow the link provided on the page.

<img width="1280" alt="image" src="https://user-images.githubusercontent.com/34209214/226187152-2663b857-abe4-4c45-8b6a-c0ab57da9719.png">

Opening the ArcGIS API project, you will see a map of Newfoundland and Labrador. There are many white circles with a number inside of them. These circles cluster all mineral showings in a particular area. You can navigate the app with mouse wheel zoom and click and drag movement. Zooming in, you will see individual mineral showings instead of clusters. The grey transparent polygons overlaying the topography are mineral exploration claims on the island. You can click on any mineral showing or grey polygon for additional details, as the example below shows for Buchans.

![image](https://user-images.githubusercontent.com/34209214/223206044-2e950705-db32-4b3d-b1f5-166a460893fc.png)

---

### **Built With**

ArcGIS Javascript API: https://developers.arcgis.com/javascript/latest/ </br>
Tesseract Javascript API: https://tesseract.projectnaptha.com/ </br>
n:point JSON data hosting service: https://www.npoint.io/
