let posts = [
    {
      title: "Post One",
      body: "This is the first post",
      createdAt: new Date().getTime(),
    },
    {
      title: "Post Two",
      body: "This is the second post",
      createdAt: new Date().getTime(),
    },
  ];
  
  function createPost(title, body) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let post = {
          title: title,
          body: body,
          createdAt: new Date().getTime(),
        };
  
        let error = false;
        if (!error) resolve();
        else reject("Error:Something went Wrong");
  
        posts.push(post);
      }, 2000);
    });
  }
  
  let timerId;
  function getposts() {
    clearInterval(timerId);
    timerId = setInterval(() => {
      let output = "";
      posts.forEach((post) => {
        output += `<li>${post.title} created at ${
          (new Date().getTime() - post.createdAt) / 1000
        } seconds ago</li>`;
      });
      document.body.innerHTML = output;
  
      // if(!posts.length) {
      //     console.log('Error:Array is Empty')
      // clearInterval(timerId)
      // }
    }, 1000);
  }
  
  function create4thPost(callback) {
    setTimeout(() => {
      callback("Post Four", "This is the fourth post");
    }, 1000);
  }
  
  const deletePost = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length > 0) {
          posts.pop();
          resolve();
        } else {
          reject(new Error("Array is empty"));
        }
      }, 4000);
    });
  };
  
  const updateLastUserActivityTime = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        lastActivityTime = new Date();
        resolve();
      }, 000);
    });
  };
  
  const promise1=Promise.resolve(`hello World`)
  const promise2 = 10
  const promise3 = new Promise((resolve,reject) => setTimeout(resolve,2000,`GoodBye`))
  
  Promise.all([promise1,promise2,promise3]).then(values => console.log(values))
  
  
  // getposts()
  // createPost("Post One", "This is the first post");
  // createPost("Post Two", "This is the second post");
  createPost("Post Three", "This is the third post")
    .then(() => {
      getposts();
      updateLastUserActivityTime().then(() => {
        console.log(`last Activity Time ${lastActivityTime}`);
        console.log("Posts:", posts);
      });
    })
    .catch((err) => console.log(err))
    .then(create4thPost(createPost))
  
    .then(updateLastUserActivityTime)
    .then(() => {
      console.log("Last activity time:", lastActivityTime);
      console.log("Posts:", posts);
    })
    .then(deletePost)
    .then(() => console.log("New posts:", posts))
    .catch((error) => console.log(error.message));
  
  // deletePost()
  // .then(deletePost)
  // .then(deletePost)
  // .then(deletePost)
  // .catch(error => console.log(error.message))
  
  // .then(deletePost)
  
  // Promise.all([createPost,getposts,deletePost]).then()
  