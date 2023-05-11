function calculate() {

  const adultsAlcoholic = Number(document.getElementById('adultsAlcoholic').value);

  const adultsNonAlcoholic = Number(document.getElementById('adultsNonAlcoholic').value);

  const children = Number(document.getElementById('children').value);


  const meatQuantity = (adultsAlcoholic + adultsNonAlcoholic) * 400 + children * 200;

  const sideDishQuantity = (adultsAlcoholic + adultsNonAlcoholic + children) * 200;

  const beerQuantity = adultsAlcoholic * 2;

  const sodaQuantity = (adultsAlcoholic + adultsNonAlcoholic + children) * 500;

  const waterQuantity = (adultsAlcoholic + adultsNonAlcoholic + children) * 400;




  alert(`Para o seu churrasco, você vai precisar de:\n

         ${meatQuantity}g de carne

         ${sideDishQuantity}g de acompanhamentos

         ${beerQuantity}l de cerveja

         ${sodaQuantity}ml de refrigerante

         ${waterQuantity}ml de água`);

}

