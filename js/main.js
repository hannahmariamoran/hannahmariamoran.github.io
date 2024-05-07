const renderItems = (data) => {
    // The `ul` where the timeline items will be inserted
    const dataList = document.getElementById('project-about');

    // Loop through each item in the data array
    data.forEach((item) => {
        // Make a template literal as we have before, inserting your data
        let Item = `
            <div> 
                <h2>${item.Title}<h2>
                <h3>${item.Subtitle}<h3>
                <p>${item.Description}<p>
            </div>
        `;

        dataList.insertAdjacentHTML('beforeend', Item); 
    });

};

// Fetch gets your (local) JSON file…
fetch('js/data.json')
    .then(response => response.json())
    .then(data => {
        // And passes the data to the function, above!
        renderItems(data);
    })
    // .catch(error => {
    //     console.error('Error fetching JSON data:', error);
    // });
