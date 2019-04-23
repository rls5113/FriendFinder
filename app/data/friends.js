var friends = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        "scores": [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },
    {
        "name": "Kathy Lee",
        "photo": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia2.s-nbcnews.com%2Fj%2Fnewscms%2F2018_30%2F1283882%2Fkathie-lee-gifford-today-170921-tease-01_22a37c36362bb36a0a1152d040b554e5.fit-760w.jpg&imgrefurl=https%3A%2F%2Fwww.today.com%2Fhealth%2Fkathie-lee-gifford-dated-once-after-frank-died-here-s-t125114&docid=TOXuxGsK1FkccM&tbnid=dvsahfhjch7nAM%3A&vet=10ahUKEwjFtr3T0N3hAhWET98KHX1jDjMQMwhGKAowCg..i&w=760&h=428&bih=577&biw=1242&q=kathy%20lee&ved=0ahUKEwjFtr3T0N3hAhWET98KHX1jDjMQMwhGKAowCg&iact=mrc&uact=8",
        "scores": [
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"
        ]
    },
     {
        "name": "Annabelle",
        "photo": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fichef.bbci.co.uk%2Fnews%2F624%2Fcpsprodpb%2FDFA1%2Fproduction%2F_99894275_img_9206.jpg&imgrefurl=https%3A%2F%2Fwww.bbc.com%2Fnews%2Fnewsbeat-42949970&docid=ISbCMDPYsZpgVM&tbnid=RW3oVvgmsfrl5M%3A&vet=10ahUKEwjR6v27zd3hAhUDJt8KHeC2BP4QMwiUASgfMB8..i&w=624&h=351&bih=577&biw=1242&q=females&ved=0ahUKEwjR6v27zd3hAhUDJt8KHeC2BP4QMwiUASgfMB8&iact=mrc&uact=8",
        "scores": [
            "5",
            "2",
            "3",
            "1",
            "2",
            "1",
            "3",
            "1",
            "2",
            "1"
        ]
    },
    {
        "name": "Grandma",
        "photo": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpeoplescience.maritz.com%2F-%2Fmedia%2FMaritz%2FProject%2FPeopleScience%2FArticles%2Fadult-grandma-elderly-432722.ashx&imgrefurl=https%3A%2F%2Fpeoplescience.maritz.com%2FArticles%2F2018%2FGrandma-Was-A-Behavior-Designer&docid=D-VIZr8x9tMPYM&tbnid=uvQLrpQ4Uep1iM%3A&vet=10ahUKEwil852D0d3hAhVxQt8KHVTKDHIQMwhnKAAwAA..i&w=1200&h=900&bih=577&biw=1242&q=grandma&ved=0ahUKEwil852D0d3hAhVxQt8KHVTKDHIQMwhnKAAwAA&iact=mrc&uact=8",
        "scores": [
            "3",
            "3",
            "1",
            "1",
            "1",
            "3",
            "5",
            "4",
            "2",
            "3"
        ]
    },
    {
        "name": "george",
        "photo": "data:image/jpeg;base64,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",
        "scores": [
            "2",
            "3",
            "2",
            "3",
            "3",
            "3",
            "3",
            "2",
            "3",
            "3"
        ]
    },
    {
        "name": "johny",
        "photo": "https://s.yimg.com/ny/api/res/1.2/URLPHdYY1xkTzewA2CykEA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://img.huffingtonpost.com/asset/5cae8627230000c2006daf93.jpeg",
        "scores": [
            "3",
            "4",
            "3",
            "2",
            "5",
            "2",
            "3",
            "5",
            "1",
            "2"
        ]
    },
    {
        "name": "Bad Granny",
        "photo": "https://imgflip.com/memetemplate/87080055/grandma",
        "scores": [
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5"
        ]
    },
    {
        "name": "Franz",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIFzxNMkArTYkIzc_wyefQpelcR7suW3YwA9decXiJ-vRmPKR6",
        "scores": [
            "5",
            "1",
            "1",
            "1",
            "1",
            "2",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "William Baires",
        "photo": "https://www.google.com/search?q=portrait+of+a+friend&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiRv5i1rtXhAhWD0VQKHblnBl0Q_AUIDigB&biw=1092&bih=700#imgrc=ERAnwJ_8KyqDBM:",
        "scores": [
            "2",
            "3",
            "3",
            "3",
            "5",
            "2",
            "3",
            "3",
            "2",
            "3"
        ]
    },
    {
        "name": "Trevor",
        "photo": "https://www.sideshow.com/product-asset/902438/feature",
        "scores": [
            "3",
            "2",
            "4",
            "2",
            "4",
            "3",
            "5",
            "1",
            "1",
            "5"
        ]
    },
    {
        "name": "bruno butts",
        "photo": "https://vignette.wikia.nocookie.net/troma/images/e/e6/2475691-toxicavenger.jpg/revision/latest?cb=20140110012220",
        "scores": [
            "5",
            "3",
            "3",
            "2",
            "3",
            "2",
            "4",
            "2",
            "2",
            "3"
        ]
    },
    {
        "name": "Homer",
        "photo": "https://banner2.kisspng.com/20180404/qxq/kisspng-homer-simpson-the-simpsons-tapped-out-bart-simpso-homer-5ac53063b97335.4238462215228724197596.jpg",
        "scores": [
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3"
        ]
    },
    {
        "name": "abramw",
        "photo": "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/31960262_1429294313842526_4825943502825193472_n.jpg?_nc_cat=108&_nc_ht=scontent-lax3-1.xx&oh=e6f4938858a70a5290ad3a158b5de677&oe=5D2F4970",
        "scores": [
            "3",
            "3",
            "3",
            "4",
            "3",
            "4",
            "3",
            "4",
            "3",
            "4"
        ]
    }
];

module.exports = friends;
