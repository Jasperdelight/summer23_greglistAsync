export const HousesView = /*html*/ `
<div class="container-fluid">
<section class="row">
  <div class="col-12">
  <div id="house-form">
    <form onsubmit="app.HousesController.createHouse(event)">

      <label for="price">Price:</label><br>
      <input type="text" id="price" name="price" value=""><br>

      <label for="description">description:</label><br>
      <input type="text" id="description" name="description" value=""><br>

      <label for="bedrooms">Bedrooms:</label><br>
      <input type="number" id="bedrooms" name="bedrooms" value="">
      
      <label for="bathrooms">Bathrooms:</label><br>
      <input type="number" id="bathrooms" name="bathrooms" value="">
      
      <label for="floors">floors:</label><br>
      <input type="number" id="floors" name="floors" value="">
      
      <label for="levels">levels:</label><br>
      <input type="number" id="levels" name="levels" value="">
      
      <label for="year">Year:</label><br>
      <input type="number" id="year" name="year" value="">
      
      
      <br><br>


      <input type="submit" value="Submit">
    </form>
    </div>
  </div>
</section>

<div class="row" id="housesList"> hello houses</div>

</div>


`