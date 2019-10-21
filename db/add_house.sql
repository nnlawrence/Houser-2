insert into houses (
    property_name, 
    address, 
    city, 
    state, 
    zip, 
    rent, 
    mortgage, 
    image
)
values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8
);

select * from houses;