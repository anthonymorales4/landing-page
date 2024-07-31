function handleSubmit(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  var mailtoLink = 'mailto:2020anthonymorales@gmail.com?';
  mailtoLink += 'subject=Offer of Employment with Google Inc.';
  mailtoLink += '&body=' + encodeURIComponent(
    'Dear Anthony,\n\nOn behalf of Google Inc., I am pleased to offer you the exempt position of Software Engineer. If you have any questions about the contents of this letter, your recruiter will be happy to help you. We look forward to working with you! \n\nThank you, \nGoogle Campus Recruiting Team \n\nP.S. This is clearly a joke. Here\'s your actual message:\n\n'+ message);
  window.location.href = mailtoLink;
}