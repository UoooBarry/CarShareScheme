<template>
    <div>
        <div class="parallax p1">
            <div class="description main">
                <h1>The new car share syetem is there</h1>
                <p>Get your favorite car anytime, anywhere, <br>
                    everything as you want</p>
                <a class="btn btn-light btn-lg action-button car-list-btn"  href='/Home'>Get A Car Now</a>                     
            </div>
        </div>
         <div class="parallax p2" >
            <div class="description family">
                <h1>Top pick for family car renting</h1>
                <p>We have the best renting policies with insurance <br>
                 covered in the renting package, Users can enjoy a<br>
                  self-driving weekends with the family to a new location<br>
                   without and worry!</p>
            </div>
        </div>
         <div class="parallax p3">
            <div class="description purpose">
                <h1>Easy Renting process <br>
                supports all purpose of <br>
                renting</h1>
                <p>Our company has wide range of cars and many<br>
                 off-site locations for users to rent the cars easily<br>
                  for all kinds of renting purpose.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.description{
position: relative;
  
  transform: translate(-50%, -50%);
  color: whitesmoke;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
}

.description.main{
  left: 50%;
  top: 50%;
}

.car-list-btn{
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 40px;
    color: #ebeff1;
    box-shadow: none;
    text-shadow: none;
    padding: 0.3rem 0.8rem;
    background: 0 0;
    transition: background-color 0.25s;
    outline: 0;
}

.description.family{
  text-align:left;
  top: 20%;
  left: 100%;
  color:#2F3737;
}

.description.purpose{
  text-align:left;
  color:#2F3737;
  top: 20%;
  left: 55%;
}

.description.purpose h1{
    margin-bottom: 50px;
}
</style>