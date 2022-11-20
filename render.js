// const fetchUserDetails = (userID, callback) => {
    // console.log("Fetching user details");
    // setTimeout(() => {
        // callback('http://image.example.com/${userID}');
    // }, 500)
// };
const time = async (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};
// const fetchUserDetails = (userID) => {
const fetchUserDetails = async (userID) => {
    console.log("Fetching user details");
    await time(500);
    return 'http://image.example.com/$(userID)';
    // return new Promise((resolve, reject) => {
        // setTimeout(() => {
            // resolve('http://image.example.com/${userID}');
        // }, 500);
    // });
};
// const downloadImage = (imageURL) => {
const downloadImage = async (imageURL) => {
    console.log("Downloading Image");
    await time(500);
    return 'Image data for ${imageURL}';
    // return new Promise((resolve, reject) => {
        // setTimeout(() => {
            // resolve('Image data for ${imageURL}');
        // }, 500);
    // });
};
const render = async (image) => {
    await time(500);
    console.log("Render Image");
};

// fetchUserDetails("Nidhi", (imageURL) => {
    // downloadImage(imageURL, (imageData) => {
        // render(imageData);
    // })
// })

// fetchUserDetails("Nidhi", (imageURL) => {
    // downloadImage(imageURL, (ImageData) => {
        // resizeImage(ImageData, (resizedImage) => {
            // transformImage(resizedImage, (transformImage) => {
                // render(transformImage);
            // });
        // });
    // });
// });

// fetchUserDetails("Nidhi")
    // .then((imageURL) => downloadImage(imageURL))
    // .then((ImageData) => render(ImageData))
    // .catch((error) => {
        // console.log(error);
    // })
const run = async () => {
    const imageURL = await fetchUserDetails("Nidhi");
    const imageData = await downloadImage(imageURL);
    await render(imageData);
}
run ();