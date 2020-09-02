const apiKey = '9fS56J32YhdYYZZvzeMh-0mgvsjXNuZckeRHJMpaYPVBytpIk3bWz4Decizc0z3PX3vREBWmMaX0jm5b3dEXULCUtwOFMRxO6FqCKuICsGsRBg3FgmsF4KwRP-1PX3Yx';

const yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {headers: 
            {Authorization: `Bearer ${apiKey}`
        }}).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageUrl: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count,    
                    }
                })
            } 
        })      
    }
};

export default yelp;