const PRICE = 8;
const DISCOUNT = {
    0: 0,
    1: 1,
    2: 0.95,
    3: 0.9,
    4: 0.8,
    5: 0.75
};

const price = books => {

    // groupBy booksId => example [2,1,0,0,0] = [1,1,2]
    const booksById = books.reduce( (acc, current) => {
        acc[current] += 1;
        return acc;
    }, [0,0,0,0,0]);

    // The aim is to dispatch by unique book 
    let maxCount = Math.max.apply(Math, booksById);
    let uniqueBooks = [];
    let uniqueBooksWithBestDiscount = []; // priority with the best discount 80%
    for(let i=0 ;  i < maxCount ; i++){
        uniqueBooks.push([0,0,0,0,0]);
        uniqueBooksWithBestDiscount.push([0,0,0,0,0]);
    }

    booksById.forEach( (item, i) => {
        for ( let j=0 ; j < item ; j++) {
            // if we have 4 unique books, switch the position
            if(countUniqueBooks(uniqueBooksWithBestDiscount[j]) === 4 
              && (j+1 < uniqueBooksWithBestDiscount.length)) {
                let tmp = uniqueBooksWithBestDiscount[j];
                uniqueBooksWithBestDiscount[j] = uniqueBooksWithBestDiscount[j+1];
                uniqueBooksWithBestDiscount[j+1] = tmp;
            } 
            uniqueBooks[j][i] = 1;
            uniqueBooksWithBestDiscount[j][i] = 1;
        }
    });

    let total = 0;
    let totalWithBestDiscount = 0;
    for(let i=0; i < maxCount ; i++) {
        total += priceByItem(uniqueBooks[i]);
        totalWithBestDiscount += priceByItem(uniqueBooksWithBestDiscount[i]);
    }

    return total < totalWithBestDiscount ? total: totalWithBestDiscount;

};

const priceByItem = item => {
    let count = countUniqueBooks(item);
    return PRICE * count * DISCOUNT[count];
};

const countUniqueBooks = (books) => {
    return books.reduce( (acc, current) => {
        return  acc + current;
    }, 0);
};

module.exports = price;