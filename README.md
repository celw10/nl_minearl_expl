## Chris' Rocks

---

### **Description**

Thank you for checking out my HTML, CSS, and Javascript project for GetCoding at: https://celw10.github.io/nl_minearl_expl/. 

Chris' Rocks is an app I built to showcase my personal rock collection and teach the user a little bit about geology. In addition, three other apps are included separately which explore other intersts including GIS web development, Optical Charachter Recognition (OCR), and shearch functionality through a database. 

---

### **Motivation**

My original intention was to build the framework to solve a problem I enocuntered at my current job regarding historic mining data. Solving this problem is difficult, and  discussing it with my coach we decided to break the problem into smaller steps and showcased a different app I bulit, Chris' Rocks. With Chris' Rocks, I wanted to build a visually appealing and immersive app to showcase my rock collection and teach the user a little bit about geology. For the other three apps, I simply wanted to investigae the functionality and the steps necessary to get a working product. 

---

### **Usage/Features*

Navigation for Chris' Rocks is shown below. If you hover over the rock type images, you'll see a brief description of what each rock type is, in addition to a popup of the rock type following your cursor. There are four in total, Igneous, Sedimentary, Metamorphic, and Economic (the kind of rocks you make money from!). Scrolling down while on this main page, you'll see a short slideshow of a few images related to how I collected these rocks. To the left are four buttons which change the layout of the 12 rock samples form my collection I've picked to display. If you hover over the rock sample its name will follow your cursor, and if you click on the images additional information about that rock sample will appear. Note that the cursor tracking functionality will not work on a mobile device, so please view on a PC to take in the full functionality of the app!

![IntroPage](https://user-images.githubusercontent.com/34209214/223201101-8cfcdbdd-8d80-472d-8fa7-d9958e674df3.png)

The first of the three extra projects is the GIS project. Toward the top right of the page you will see five elements. A search bar, drop-down search tool, a search button, Chris' Rocks, and a menu image. To search through a database, type in a particular historic mining company, for example "Noranda". A footer element will appear after clicking <em>search</em> with the results of your search query. Clicking Chris' Rocks will return you to the main page, and clicking on the menu icon right of that will open a hidden menu. Clicking on the options in this hidden menu will load different background images representitive of different types of minearl exploraiton data. 

![image](https://user-images.githubusercontent.com/34209214/223204427-04b30b6d-6bd4-4a66-82b5-7b56027cbd21.png)

Navigating to the OCR Project you will see a screen identicial to the following. Here, you may upload only image data in either English, Spanish or French. This image should have some text for the Tesseract OCR algorithm to recognize. Four versions of your uploaded image will pop up in addition to the regnized text. These four popups represent typical processing steps duirng OCR, but are not implemented here, and only for show. There are five example images to use in this github repo under the directory labeled ocr_examples under images, or you may follow the link provided.

<img width="1259" alt="image" src="https://user-images.githubusercontent.com/34209214/223279537-042260c0-7233-4645-9db8-49b6abe427b4.png">

Opening the ArcGIS API project you will see a map of Newfoundland and Labrador. There are many white circles with a number inside of them. These circles cluster all mineral showings in a particual area. As you zoom into the app and play around you will see all sorts of mineral showings from accross the province. The grey transparent polygons overlaying the topography are minearl exploraiton claims on the island. You can click on any mineral showing or grey polygon for additonal details, as the above below shows for Buchans.

![image](https://user-images.githubusercontent.com/34209214/223206044-2e950705-db32-4b3d-b1f5-166a460893fc.png)

---

### **Built With*

ArcGIS Javascript API: https://developers.arcgis.com/javascript/latest/
Tesseract Javascript API: https://tesseract.projectnaptha.com/
n:point JSON data hosting service: https://www.npoint.io/
