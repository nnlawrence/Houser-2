create table houses(
    id serial primary key,
    property_name varchar(100),
    address varchar(200),
    city varchar(100),
    state varchar(2),
    zip varchar(5)
); values (
    'superdome',
    '555 dat street',
    'Metairie',
    'LA',
    '50004'
)

alter table houses
add rent decimal,
add mortgage decimal,
add image varchar(999);