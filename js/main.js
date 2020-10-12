html {
  font-size: 2rem;
  font-family: 'Merriweather', serif;
  background-color: #eaeaea;
}

body {
  padding:5rem 0;
  color:#333F48;
}

a {
  text-decoration: underline;
  color: #ae7f3d;
}

a:hover {
  text-decoration: none;
  color: #ae7f3d;
}

main {
  display:grid;
  grid-template-columns: 2fr 1fr ;
  grid-auto-rows:min-content;
  grid-gap:2rem;
  width: 40vw;
  margin: 0 auto;
}

.intro-block {
  grid-column:1 / 3;
}

.statement {
  grid-column:1 / 2;
}

.projects {
  grid-column:2 / 3;
}

.item {
  grid-column:1;
  border-top: 1px solid #ccc;
  padding: 1rem 0;
}

.definition {
  grid-column:2;
  border-top: 1px solid #ccc;
  padding: 1rem 0;
}



h1, h2, h3, h4, h5 {
  font-family: 'Merriweather Sans', sans-serif;
  margin-bottom:1rem;
}

h1 {
  font-size:3.375rem;
  font-weight:800;
}
h2 {
  font-size:2.25rem;
}
h3 {
  font-size:1.5rem;
  font-weight:300;

}
h4 {
  font-size:1rem;
}


li {
  font-size: 1.25rem;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5;
  padding: .5rem 0;
}

p {
  font-size: 1.125rem;
  line-height: 1.5;
  margin-bottom:1rem;
}

.location {
  font-size: 1rem;
  font-family: 'Merriweather Sans', sans-serif;
  text-transform: uppercase;
  line-height: 1.5;
}

img {
  display: block;
  margin: 0 auto;
}

figcaption {
  font-size: .875rem;
  font-family: 'Merriweather Sans', sans-serif;
  padding-top: 1rem;
}