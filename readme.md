# Ethereum Lands


# TODO
* solve the problem where someone owns a chunk of area.  How would you calculate the already owned area for every owner without burning through a ton of gas?  Use an oracle service to do this... 


0x456642342342 => {
  "coordinates": [
    [1,2],
    [3,4],
    [56,44]
  ]
}

0x7d77e7349BFE929292D => {
  "coordinates": [
    [88, 44],
    [100,677],
    [345, 67]
  ]
}

do any of these coordinates intersect at all?


# Contract Storage requirements

Shapefile example:

```JSON
{
  "type": "polygon",
  "coordinates": [
    [1,2],
    [3,4],
    [56,44]
  ]
}
```

Shapefile example:

```JSON
{
  "type": "circle",
  "coordinates": [
    [1,2]
  ],
  "radius": 44
}
```


{address}: [
  {shapefile},
  {shapefile},
  ...
]

{
  "address1": {
    shapefiles: [...],
    index
  }
}





* coordinates are lat/long, but due to solidity lack of fixed numbers, we store lat/long in without their decimals
to 8 decimal places.  For example:

(Disneyland)
33.8120815,-117.9189609 is:
3381208150, -11791896090

39, -94.55 is:
3900000000, -9455000000

0.1, -0.1 is:
010000000, -010000000, which is:
10000000, -10000000


0.00045, 0.00000001 is:
45000, 1



0   = 0 degrees
1   = 0.00000001 degrees
10  = 0.00000010 degrees
100 = 0.00000100 degrees
