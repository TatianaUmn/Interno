import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    // дл€ страницы Projects
    currentButtonTag: 'Show All',
    curretntIndex: null,
    currentIndexFoto: 0,

    projects: [
        {
            id: 1, tag: 'BedRoom', img: './img/project/project_01.jpg',
            title: '1. Minimal Bedroom',
            section: 'Decor / Artchitecture',
            slider: [
                { name: "foto1", img: '../../img/project/slaider_project1.png' },
                { name: "foto2", img: '../../img/project/slaider_project2.png' },
                { name: "foto3", img: '../../img/project/slaider_project3.png' },
            ],
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
             In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor`
        },
        {
            id: 2, tag: 'Bathroom', img: './img/project/project_02.jpg',
            title: '2. Minimal Bathroom',
            section: 'Decor / Artchitecture',
            slider: [
                { name: "foto1", img: '../../img/project/slaider_project1.png' },
                { name: "foto2", img: '../../img/project/slaider_project2.png' },
                { name: "foto3", img: '../../img/project/slaider_project3.png' },
            ],
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor`},
        {
            id: 3, tag: 'Kitchan', img: './img/project/project_03.jpg',
            title: '3. Minimal Kitchan',
            section: 'Decor / Artchitecture',
            slider: [
                { name: "foto1", img: '../../img/project/slaider_project1.png' },
                { name: "foto2", img: '../../img/project/slaider_project2.png' },
                { name: "foto3", img: '../../img/project/slaider_project3.png' },
            ],
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor`},
        {
            id: 4, tag: 'LivingArea', img: './img/project/project_04.jpg',
            title: '4. Minimal Living Area',
            section: 'Decor / Artchitecture',
            slider: [
                { name: "foto1", img: '../../img/project/slaider_project1.png' },
                { name: "foto2", img: '../../img/project/slaider_project2.png' },
                { name: "foto3", img: '../../img/project/slaider_project3.png' },
            ],
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor`},

        {
            id: 5, tag: 'BedRoom', img: './img/project/project_05.jpg',
            title: '5. Bedroom',
            section: 'Decor / Artchitecture',
            slider: [
                { name: "foto1", img: '../../img/project/slaider_project1.png' },
                { name: "foto2", img: '../../img/project/slaider_project2.png' },
                { name: "foto3", img: '../../img/project/slaider_project3.png' },
            ],
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. `\n` In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor"
        },
        {
            id: 6, tag: 'Bathroom', img: './img/project/project_06.jpg',
            title: '6. Bathroom',
            section: 'Decor / Artchitecture',
            slider: [
                { name: "foto1", img: '../../img/project/slaider_project1.png' },
                { name: "foto2", img: '../../img/project/slaider_project2.png' },
                { name: "foto3", img: '../../img/project/slaider_project3.png' },
            ],
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor`},
        {
            id: 7, tag: 'Kitchan', img: './img/project/project_07.jpg',
            title: '7. Kitchan',
            section: 'Decor / Artchitecture',
            slider: [
                { name: "foto1", img: '../../img/project/slaider_project1.png' },
                { name: "foto2", img: '../../img/project/slaider_project2.png' },
                { name: "foto3", img: '../../img/project/slaider_project3.png' },
            ],
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor`},
        {
            id: 8, tag: 'LivingArea', img: './img/project/project_08.jpg',
            title: '8. Living Area',
            section: 'Decor / Artchitecture',
            slider: [
                { name: "foto1", img: '../../img/project/slaider_project1.png' },
                { name: "foto2", img: '../../img/project/slaider_project2.png' },
                { name: "foto3", img: '../../img/project/slaider_project3.png' },
            ],
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor`},
    ],

    buttons: [
        { id: 1, name: 'Bathroom' },
        { id: 2, name: 'BedRoom' },
        { id: 3, name: 'Kitchan' },
        { id: 4, name: 'LivingArea' },
        { id: 5, name: 'Show All' },
    ],
    //дл€ страницы Projects - конец

    // дл€ страницы Blog

    articles: [
        {
            id: 1,
            title: '1. LetТs Get Solution For Building Construction Work',
            title2: 'Design sprints are great',
            date: '26 December,2022',
            img: '../img/articles/article_1.png',
            imgDetails1: '../../img/articles/articleDeteilse1.png',
            imgDetails2: '../../img/articles/articleDeteilse2.png',
            paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
            paragraph2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            paragraph3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',

        },
        {
            id: 2,
            title: '2. Low Cost Latest Invented Interior Designing Ideas.',
            title2: 'Design sprints are great',
            date: '26 December,2022',
            img: '../img/articles/article_2.png',
            imgDetails1: '../../img/articles/articleDeteilse1.png',
            imgDetails2: '../../img/articles/articleDeteilse2.png',
            paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
            paragraph2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            paragraph3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
        {
            id: 3,
            title: '3. Best For Any Office & Business Interior Solution',
            title2: 'Design sprints are great',
            date: '26 December,2022',
            img: '../img/articles/article_3.png',
            imgDetails1: '../../img/articles/articleDeteilse1.png',
            imgDetails2: '../../img/articles/articleDeteilse2.png',
            paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
            paragraph2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            paragraph3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
        {
            id: 4,
            title: '4. LetТs Get Solution For Building Construction Work',
            title2: 'Design sprints are great',
            date: '26 December,2022',
            img: '../img/articles/article_4.png',
            imgDetails1: '../../img/articles/articleDeteilse1.png',
            imgDetails2: '../../img/articles/articleDeteilse2.png',
            paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
            paragraph2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            paragraph3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',

        },
        {
            id: 5,
            title: '5. Low Cost Latest Invented Interior Designing Ideas.',
            title2: 'Design sprints are great',
            date: '26 December,2022',
            img: '../img/articles/article_5.png',
            imgDetails1: '../../img/articles/articleDeteilse1.png',
            imgDetails2: '../../img/articles/articleDeteilse2.png',
            paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
            paragraph2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            paragraph3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
        {
            id: 6,
            title: '6. Best For Any Office & Business Interior Solution',
            title2: 'Design sprints are great',
            date: '26 December,2022',
            img: '../img/articles/article_6.png',
            imgDetails1: '../../img/articles/articleDeteilse1.png',
            imgDetails2: '../../img/articles/articleDeteilse2.png',
            paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
            paragraph2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            paragraph3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
        {
            id: 7,
            title: '7. LetТs Get Solution For Building Construction Work',
            title2: 'Design sprints are great',
            date: '26 December,2022',
            img: '../img/articles/article_1.png',
            imgDetails1: '../../img/articles/articleDeteilse1.png',
            imgDetails2: '../../img/articles/articleDeteilse2.png',
            paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
            paragraph2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            paragraph3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',

        },
        {
            id: 8,
            title: '8. Low Cost Latest Invented Interior Designing Ideas.',
            title2: 'Design sprints are great',
            date: '26 December,2022',
            img: '../img/articles/article_2.png',
            imgDetails1: '../../img/articles/articleDeteilse1.png',
            imgDetails2: '../../img/articles/articleDeteilse2.png',
            paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
            paragraph2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            paragraph3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
        {
            id: 9,
            title: '9. Best For Any Office & Business Interior Solution',
            title2: 'Design sprints are great',
            date: '26 December,2022',
            img: '../img/articles/article_3.png',
            imgDetails1: '../../img/articles/articleDeteilse1.png',
            imgDetails2: '../../img/articles/articleDeteilse2.png',
            paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
            paragraph2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            paragraph3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
        {
            id: 10,
            title: '10. LetТs Get Solution For Building Construction Work',
            title2: 'Design sprints are great',
            date: '26 December,2022',
            img: '../img/articles/article_4.png',
            imgDetails1: '../../img/articles/articleDeteilse1.png',
            imgDetails2: '../../img/articles/articleDeteilse2.png',
            paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
            paragraph2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            paragraph3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',

        },
        {
            id: 11,
            title: '11. Low Cost Latest Invented Interior Designing Ideas.',
            title2: 'Design sprints are great',
            date: '26 December,2022',
            img: '../img/articles/article_5.png',
            imgDetails1: '../../img/articles/articleDeteilse1.png',
            imgDetails2: '../../img/articles/articleDeteilse2.png',
            paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
            paragraph2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            paragraph3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
        {
            id: 12,
            title: '12. Best For Any Office & Business Interior Solution',
            title2: 'Design sprints are great',
            date: '26 December,2022',
            img: '../img/articles/article_6.png',
            imgDetails1: '../../img/articles/articleDeteilse1.png',
            imgDetails2: '../../img/articles/articleDeteilse2.png',
            paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
            paragraph2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            paragraph3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            paragraph7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
    ]
},

mutations: {
    // дл€ страницы Projects
    CHECK_BUTTON_TAG(state, name) {
        state.currentButtonTag = name
        console.log(name);
    },
    ACTIVE_BUTTON(state, id) {
        state.curretntIndex = id;
    },
    //дл€ страницы Projects - конец

},

actions: {
    // методы дл€ асинхронных операций
},

getters: {

    // дл€ страницы Projects
    selectedTag(state) {
        if (state.currentButtonTag === 'Show All') {
            return state.projects
        } else {
            return state.projects.filter(
                (project) =>
                    project.tag === state.currentButtonTag
            )
        }
    },
    //дл€ страницы Projects - конец

},
  modules: {
  }
})
