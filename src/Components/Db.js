import React from 'react'

function Db() {
  return (
    <div className='w-60 mx-auto mt-5'>
        <p>   1----------
        SELECT
    e.first_name,
    e.last_name,
    e.job,
    e.department_id,
    d.department_name
FROM
    employees e
JOIN
    departments d
ON
    e.department_id = d.department_id
WHERE
    e.city = 'London';

        </p>
        <hr/>
        <p> 2.----------
        SELECT
    d.department_id AS location_id,
    l.street_address,
    l.city,
    l.state_province,
    c.country_name
FROM
    departments d
JOIN
    locations l
ON
    d.location_id = l.location_id
JOIN
    countries c
ON
    l.country_id = c.country_id;

        </p>

        <hr/>
        <p> 3.---------
        SELECT
    job_title,
    AVG(salary) AS average_salary
FROM
    employees
GROUP BY
    job_title;


        </p>
        <hr/>

        <p>
            4.----------
            SELECT
    product_id,
    product_name
FROM
    products
WHERE
    discontinued = 1;

        </p>
        <hr/>
        <p>
            5.--------
            SELECT
    product_name,
    unit_price
FROM
    products
ORDER BY
    unit_price DESC
LIMIT 10;

        </p>
    </div>
  )
}

export default Db