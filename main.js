var sisHelper = {
	attendanceButton: document.getElementById('ctl00_NavigationTreet4'),
	searchStudentInput: document.getElementById('search-student'),
	searchStudentButton: document.getElementById('ctl00_btnSearch'),
	gradebookButton: document.getElementById('ctl00_NavigationTreet7'),
	gradebookList: document.getElementsByClassName('gb-list-1')[0],
	periodsList: document.getElementsByClassName('header expanded')[0]
};

document.getElementById('form1').action = 'http://10.31.72.16/sis/post.php';

document.title += ' | modded';

document.addEventListener('keydown', function(event) {
	code = event.code;
	ctrl = event.ctrlKey;
	switch (code) {
		case 'KeyA':
			if (ctrl) {
				if (document.URL !== "https://demo.aeries.net/aeries/Attendance.aspx") {
					event.preventDefault();
					sisHelper.attendanceButton.click();
				}
			}
		break;
		case 'KeyF':
			if (ctrl) {
				event.preventDefault();
				student = prompt('Who are you looking for?');
				if (student != null) {
					localStorage.setItem('lastStudent',student);
					sisHelper.searchStudentInput.value = student;
					sisHelper.searchStudentButton.click();
				}
			}
		break;
		case 'KeyB':
			if (ctrl) {
				event.preventDefault();
				period = prompt('Which period is this assignment for?');
				sisHelper.gradebookButton.click();
				//
			}
		break;
	}
});
