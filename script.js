function sendWhatsApp(event){
  event.preventDefault();
  const phone='77779100199';
  const name=document.getElementById('name').value.trim();
  const business=document.getElementById('business').value.trim();
  const service=document.getElementById('service').value;
  const text=`Здравствуйте! Меня зовут ${name}. Ниша: ${business}. Интересует услуга: ${service}. Хочу обсудить продвижение.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,'_blank');
}
