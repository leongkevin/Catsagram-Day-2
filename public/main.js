export const createMainContent = () => {
	// Create h1
	const h1 = document.createElement('h1');
	h1.innerText = 'Catstagram';

	// Create img
	const img = document.createElement('img');
	img.style.margin = '20px';
	img.style.maxWidth = '750px';

	const container = document.querySelector('.container');
	container.appendChild(h1);
	container.appendChild(img);

	const buttonContainer = document.createElement('div');
	container.appendChild(buttonContainer);

	const requestButton = document.createElement('button');
	requestButton.innerHTML = 'REQUEST';
	buttonContainer.appendChild(requestButton);
	requestButton.addEventListener('click', (e) => {
		// fetchImage();
		window.location.reload();
	});

	const upvoteButton = document.createElement('button');
	upvoteButton.innerHTML = 'UPVOTE = 0';
	buttonContainer.appendChild(upvoteButton);
	let upvoteCount = 0;
	upvoteButton.addEventListener('click', (e) => {
		upvoteCount++;
		upvoteButton.innerHTML = `UPVOTE = ${upvoteCount}`;
	});

	let downvoteCount = 0;
	const downvoteButton = document.createElement('button');
	downvoteButton.innerHTML = 'DOWNVOTE = 0';
	buttonContainer.appendChild(downvoteButton);
	downvoteButton.addEventListener('click', (e) => {
		downvoteCount++;
		downvoteButton.innerHTML = `DOWNVOTE = ${downvoteCount}`;
	});

	const commentDiv = document.createElement('div');
	const inputField = document.createElement('input');
	const submitButton = document.createElement('button');
	const ul = document.createElement('ul');
	submitButton.innerHTML = 'SUBMIT';
	inputField.setAttribute('type', 'text');
	inputField.setAttribute('placeholder', 'COMMENTs HERE');
	container.appendChild(commentDiv);
	commentDiv.appendChild(inputField);
	commentDiv.appendChild(submitButton);
	commentDiv.appendChild(ul);

	submitButton.addEventListener('click', (e) => {
		e.preventDefault();
		const newLi = document.createElement('li');
		const deleteComment = document.createElement('button');

		deleteComment.innerHTML = 'Delete this comment';

		newLi.innerHTML = `${inputField.value}`;
		newLi.appendChild(deleteComment);

		ul.appendChild(newLi);
		inputField.value = '';
	});


    deleteComment.addEventListener('click', e => {
        e.preventDefault();
        const ulList = document.querySelectorAll('ul')
        
    })


	fetchImage();
};

const fetchImage = async () => {
	// Fetch image from API and set img url
	try {
		const kittenResponse = await fetch(
			'https://api.thecatapi.com/v1/images/search?size=small'
		);
		// Converts to JSON
		const kittenData = await kittenResponse.json();
		// console.log(kittenData);
		const kittenImg = document.querySelector('img');
		kittenImg.src = kittenData[0].url;
	} catch (e) {
		console.log('Failed to fetch image', e);
	}
};
