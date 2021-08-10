import React from "react";
import Navbar from "../navbar/Navbar";
import "./Blog.css";
import { Link } from "react-router-dom";

class Blog extends React.Component {
    blogs = [
        {
            img: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            date: "12/12/2012",
        },
        {
            img: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci quas modi fugit autem recusandae quidem.",
            date: "12/12/2012",
        },
        {
            img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRYYGBgYGBgYGRgcGBgcGBgYGBgZGRgYHBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQrISE0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0Mf/AABEIAK4BIQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAEEQAAIBAgQDBAgDBgUDBQAAAAECAAMRBAUSITFBUSJhcZEGEzJCgaGx0RRSwRUjYnLh8EOCkqKyU8LxM2SDs9L/xAAYAQEBAQEBAAAAAAAAAAAAAAABAAIDBP/EAB4RAQEBAAMBAQEBAQAAAAAAAAABEQISIUExUWFx/9oADAMBAAIRAxEAPwD00xIpiGeV3KDOJjCZ15aiNIiY9owiDUdqj0MjCyVFjFUyGSgyFRJRNxmnTok6LJSY0xYkWTWkbSRpGYUmRWEW05jFIGEYyyR2EjNUSRmid6uccQvWQ1Mei8SBDYsqU043aCsRnacF7R7vvIaNeq5uLKPOHZrrR4ER4ME63XjY/KKMcRxHzjOTPSi14hMHrmC9f7+EeMYvUR2DrVomMMg/Fr+Yec4Ypeo85aMPZZE4tFbEr1Ep18UOsLTIZXxSjjeRLiUPAyrXqA8TKTYpQeIk31XMNXKOSOflI/SHPXROzYGV2x6c4KzGsr85Tj6Q/wDbtbr9fvOkfqFiTpkGPcCIhEkIiEThh1CVnWktommGLURES0m0ztEsOogskVY4JHBZqQaQR04LHWiCTotp1ogkQxYhkjWkbGSNK9ZrCVSriscqbkwTX9IByEoZ5irm0z7vM+11nGfR3EZ654bQdUzWofegxqkjZ441ki8+Pf8AMfOVamJJ75FTps5sBDGBykDtPHyAuU0WY3IsIerY1aa9/SDK2ORBpW36QTicbfvMzmjD8fmLubk2HIco3D5rbZt4Nq1LyG81OKadcxSPGYL1mVNSIKxjgas4lTziesHIzMJiD1kq1z1ljI6+KtKlTMSOUoGsZA9SM4pZr5gxg+rWJnO0gdpqRUvrZxeV3MQPELXrJ0h1zpB7+REtH2nWnFGWnWj7TrSxG2i2izo4tJadpjoksGutOtOnSLok68S8k4xpikxhMkRzAWc5gEUjnCGNq6QTMNmeKLuekzbvjfHj9U8VWLG5lrL8meqNRuBHZVlrVWvbsg8evdN3g8KEWM/xrlyxkT6KcyzShick0Hu75sc1zdaYPM8hMTjs1ZyST9h4CXvwcdv6so6UxyvKGLzJm2HCU6lW8gLRnForuTIWeEcBlVSsewu35jw+HWFk9C395wPBf6xZvKRldUYXm2pehyX7TsfLeR430VoA21svDZRqJv3k7GOyDdYo1IwvNY3oxhxe9d+A5IOIv0N/CcMiwa8WrPtf2kA8LBZdovWSDyRa01BwuBH+E58Xb9I1aeCH+Ef9bn9ZdosrPJWvL+GyetU3CaV46n7K/Pcw7Sx2GT2E0fyhL/6iCY3EZxS5l28X+wheV+RYZhshopvUY1G6C4TyG7SetlyNstBLfy/beDT6RBD+7povebsfNiZVrZ7Xe4LsB0Bt9JnOVOJsb6MHimpO5g2n4Ejb5wBjMrq092QkfmXtL5jh8YQbHODfW9+tzeS081frr6g7N/qm5eUFkZ/XOmp/aif9J/8AUP8A8zo9r/Bj1+dH6YoEzjGo4tpJadLFqO0XTHzrxwGaZ2mP1RC8sRumdpi6hELiWImidonesiGpHInaIyoLCc1WRVau0EynpJjiDoHOAMvw3ragTlxPhLfpFUvUPwE7I6TK+sjlOb0zzi2uCwqogAAAAg7Ns3CXVeP08ZBmOdaUsNjMZi8WWMd3yOfHj9qTMMUXJJMGkyxhsM9VtCC55nkPEzd5J6NogBI1PzYj6dBGQ8uUjFYXJqz8E0jq23yhXD5AqMDUOrx4eU3y4UKOEy/pDU7YU8LGV2MzleVxKc6o0Vte5HuqLn5bD4wNj/S122RAo6sbnyH3gvHkWk/ozlAqn1lQfu0Ow/6jj3f5Rz8utr4bxkGclrOENes277U1sBZeJe3HfgO4HqICzbNCz3U3+lrnaGs/xoFxfe3K3lMfoZ3CINTMbADmf0HfyhPTPPRDLKb13CKeV2Y8FXqevQDn52N4rCYemNLa3bmxbSPgBw+PWOwyjDUdAszHtO3V+n8o4D7kzN4/Gs7XPnL9/CMnB4Y7l3XwdD/2SJ8vw3KrU8kP6CA0qnrH6pZUJVMuonhWYeKA+faEpVcr/JVRu46lP0I+crFo31hmpKDzlFX8gP8AK6H5A3nLllT8j+RkTVz1kbVW5MfOPo8WXyqofdI8ZVfAsv8A5H3jDUf8x84lieLmPq8TaH/sj7zo2/8AGfKdIPdrxyGZ7Ks3OvRU2N7A9/QzRKQdxMcbo5cbx8K8rPUIluRul5qxmVCKhjfWGMYafCdcHhMlKHjGYxl44OIo3UY7VecZGTJJDGl5ytOKxBL3kNbYRzbSOs+28Koz7ZeHcu0izHHJTGlbX+kkx+aqt1U+J+0yWJrF2NpiTXf/AK7EYhnbqSZfwWQO9i+w6c4U9HsnXZ3FzNalJQNpuRjlyD8pypKSiwtDVOoOEp1DblGJVjPHK+ioYGZ30kyxnW6e0Nx39RCiVbSUYgHYxvqlyvNaeTV3dUdSik9p7jZRxt38h3kQ/meNSigRBpCjSoHID++MKZvjlUFhwXh/E1r+U83zTMC7FmMx+3HWe+0teq9RwqgszGyqOJJ5b/XlNXl+XJhkJYhqjDtv89C39368TyArejuXeoQ16os7CyqfcQ22P8R59BYdYMzXMi7HfaF98h/U+Z5ipuF8+JgCtVkdatKbvfnN8eItTGvE/EGNOFqKLsh37wSPEDcTsNSZ3CKDqPW+w5k90fB6X8VFGKEOJl9CkLOgduZJNt+i8OsjfAYdt9Fv5WYfK8O0OUG/ECd60Qk+W4fkHH+f7iVXyxPddh4gH6WjsGVBqjGaTfgmX3lI+MRqPUiSRaokn9WvWdNJ6PWT1i619ocR1H3hTIc41dhz2uR/MPvM9gsUUbuljMMN/ipw4m3I/mE8889deUl8rdgxZn8hzkONDntj/cOoh8GdZdeflLKa6XlKohXflCEa63jYJVFXuNo1kPG8XEUmXdeHMRqOp5zLRyPfbnJJC4v7PGMp1GvpbY/WQSshjBUtsZLbvjGRbRB4MrYxLgzmqMvK4+kWrcjYyLz/ADvBOHOkG0G4UsjjUu02+JoWa5IlPFYNKo7JAPdCN9k+BqFlGg27paXHsh7ZtA6JUp7D5yyylx2yJMjlLHo3AgxmIcEdnYzNtQ9WdSEHulnD5k5NitpDE742oh7QuOolrDZgHViDw4+JkGio507b/TrK+MqJTtSSw063Y/mbSdz8oWmcdZ/0kzQs5Tku1wRY99xxkPonhA9Q1XtopkWJtYOdwxB4hR82U8oEx1S7t3kw3gHNPB3Bsajs3wB0/PSI5kb/AMXs+zVT2EPZFxeZmpUkNSsTvEwtE1HCalW4Jubkbctv72jOOK1FVqxaQ09puPEDp3n7STE4daZ46j1tbyEky7LzVOpiVp6tJbmT0F/rNbMWG0i9V9Kbnn0A6k8hNDRprRQji1t2536dw6RaeimlkUKOB6nvJ5/1g/E4m8xbrSviMVcmQ08QRwMiqESPUBNYzq21UkSM1TIdcbrjg1OaxkTveIXjWMVp+oTomoTpBtKwhHKMd7jcDKeJWUi5U3E4Y730WzTBtSYVKd9N73Hun7TQZDnquNLbNzHXvH2g/KsWKiaGsQRYgwJm2Aag4Zb6Cbq3MHoT1jPHOzfK9LBizK+jvpEHslQ2bkeR/r3TUAzpLrjZhWF4OxOFKnWgueY6j7wjOMrNUoVh8SzgkJaxsQdjHtR1+0LeHGLjsCxJem2h7W3F1PiJRw1J2ur1zrU2YKAADx2uL8JknioKfZcm3Jzw8D0MsrVQi438ItOiqqVYlgeOogyk1RqVyqmpTH5BqdOdtI4jw/rILpqgi2kyrWwzW1ISOq9ftJKONZ1DJTax/MQD8RxEc1WpyRfi/wBhFB1VEI3NjzB4j4QbVZEN149wMOVcIHF3VQ4PZYb284Mx2OSkP34KG9gVUsr3/KQPlxgdRJiUqDS4O/DY/WRYjAqnEkKPe5fGLUqsfYo1SO9Av/IiT4erVH+Cx/mdP0JilPDCid9RYdRciSVqycLHu2l+phyLMigg7tT2Fj/CeF+6VMPjgzMiYerqXjqUIB4FiL/C8hrkqFKbuuosRwPugd0z2BPrBXdjuqaR3M52/wCJ84exuPemNTUb/wCcX8gINxGY+sw7sKYS7kWHE2UG585mz66cb8YircE3h7OSUppRPFERT3HSC3zjMrwofEUw26qPWP4ILgfFtI+Mfn1TWXfmGG/iD9pu31pniZPgEYlnCkgC3gT/AOJXZps/RbAMKBLAAu2sK3B1KixuN12EdxisrWYuwUrxIHfa+8MKyU00gHSOA536nvjMfl1RHd3VEC2Kqrargn5bQXiMQTC+mJ6+NLkmV2qSvqkuGRXNi1j0OwPhGcVeSNm3tcDvJsJoMsw2B0WrPrc76gWUL3L9zKYyUN3HrIK2QVF3Clh1G4/pHz+sWr2IyvDe5iwB0dLnzU7+UHYjC01BP4lG6AI+/wAtpA+WP+U+UrVMA/5T5GMi1zX48uRG4Pxia5ElJ04XHUW2PiDsY5n6rY91wPIxxan1GdIdXcZ0MWvSsQsGV1harvKGIScI76r4LFlHE2OHdKyaGsQRYzCVhCeSZiVOkmOM8pqvm+XPh3tuVPsN17j0YTRejXpNwp1j3B/v94UqUkroUcXBHxB5EHkZgc1y58M+ltwfYfkw/Q90YzsvleuAxZhPRf0m02p1T2eTHiv3X6eHDcq3Mb35zTnZh0H5llaVRxZGtbWjFWt0vzHjL950kzCU8Ml0rIEdLX9YxOoHZXDMbEHr122O0nw+b4VBam6W6U1LX+CA3hbH5fTrLpqIjgcNSg2PUQJic4OGUjEggKQFdASrjkQCduG6k3HeLNDF+uTWdVXDBmBJ1UnD07ta+pC4BA7uHQjgXYTFV3XdadJxfUhLOy2Nt9JAPw6xDnLt7GExLdCyog/3uD8pGcHUqE1gn4atqFgzqyVQABd9F9Lcgw3tx1DaOLE5pYg/41MeFE/rUkuHR1DCo/rAw2GlU094tAtFsaztTqV6FJhYqq0w7MrE2Y3YaeFhcb2NpZ/Zlc8cY4/kpUV+qtLFh9epUognS9dANigBqr/C6D2h0YfG3OGlmFWooZMM4B4F3pofiu7D4iWsJlzI6u2JxDlTfS7JoNwRZlRFuN+vSMxWDdXapQPaY3ekzdhzzKMfYb+EnSeRQkkyRUzif+nQXxrOx8lpj6yycK7r+9cK6n929PV2Rbgwc9sX8JQpZlimdkGEWmRwNWsyhxv7IRG1GwuQOHWTlMYdw2FT/LWqfVkliVcxxOJSynDJUB2NYVNNMXNgzLYsvft4XmdzzK64QsfVpzOh3a4PO5ABHfabGlg65P76tTdDs9NcOFR1/KS7sbShj8tqIrLhyjq17UqzMQpP5H4m/RiDv7TezJSvN8NmVai5YEG6lGBGxUkEju9kbxa+YhlI33Or5Qhi8mrkMzer1KWDog1shU73sxvtYm17X3tzA1aZHPytN9Y12sXMMyJUX1yOy7EKCoV78Lux06OpvbvG83tDGV+IwwC2uS1ZDYdQqA325XmCy7MHRHpEB6dS2tGLbW5oVI0nh5CE8KcThhrw7NUpcfVsLlR3AfVPisLGVjM8dqvc9YCqN08IUq4z8STqp0cOyi5L1HTUOukJpbx4whk+TOp10quFZhwfQ9Uqe67hQe+14SY1aG5VlSVGKVKhp1QbCmRpc/6xYn+EbiEanomvNnPi32hirkxqqwxTrVJACMqCk1O172N21A3HZa47PjBbVMXhP/dUB1v6xB47kf7h/LLf4yI4ZHQjUquoAFrWO3eJo8vro2y9lvynY/Dr8Jj8L6WeuJWhhndgLka6a2HxMkfF4tuGERf5q6f9oMsTbVctpvyCnqOHxEF4zJwu5G3UcP6Shkua4lSwxKpo0jRodnfVfgxa1xb5w3h83R9lbfmp2a3geXfwgmXxuBToJnsZhFE3GZ4em9yraG7vZPiOXwmLzWi6HtDbkw3U/Hl8ZrjUH+oE6N9ZOm031XbhKtUS+8qVEnmjsFYhJRLlTcQrXWDMQs3FrW5BmWoAEw9jcIldCji4PmDyIPIzzPAYoo46T0DKsaGUS/GLPrB5vlr4Z9LbgnsPwDAfRh0mm9EvSa1qVQ7e6en9O7ymizHAJWQo4uD5g8iDyPfPM84yx8M9jupPZfr3Ho0Yd2evZFYHcbjkYswXoj6T8KNU/wArH6eP1m8VgRccJOdmFjXS4secdOkGaxOJq4ZTrR66D2WRbva/B1HAjqBY9x2NdM5xDgNTwblTwL1ET/aTceU1bCAsctWi7OuqojblOLoe78y/Md/KMqsmFqYgEYmmtIqP3To+p0J9oEkWIO3ZN1NtxwlOqcXTdRUrUVpNZRUCXdmtsNLnidzxa3fLOGzipVXVToMBe3bbQf8ATuflJ6XrXJSvTp+rYEOuosT02KgSJowFQ7nFVf8AKlBR/wDWT8445WCO1Wrt/wDKy/8ADTKlbBYmiLYZ0dAdlqFtaDoGF9YHfv3njJ6FOq6hvxAsfyIo+uqSWcblyVAtyyugASovtqByJPtrzs1999jvBeJxmMo2U4dKw4Gsr6FtcDUym7L1PHxaEEwDHjWqn/MB/wAQJZoYUKrLu6v7QclwdrW7V9u6OjVAnFMAVbDKDwIFR/ndbyli8LiyN8SgH8GHH1d2lmpgKtC7YbtpxNF24fyOeXcfPlKVLHYmrceqSkRtpdiWPeAu1vjBIWQFFWqWaou34hbBzYkrqXgwF7AcRbskHeZ3Ocjqs/rNeHFNrAuLjtW4sttmJ+vE8zWIweLvf1lMeCfcyrhlrU6geo/rEsQyaQFYEW3HdGVMri8qq0jZyRfgygaW7w3OMNZ9NvW1fDWwA8ptCiOCKQAHOg+6n+Q+7/fCA8VlIa5S6sOKNsw8DzH93mpUEYvNnqOHqAFgApdVAZrcCwGzHv2PQiS4aqFPrKb6HB4j2G7mHI+Pz4yrUwh1aT2T3xn4V07QNjwt1H0Iim1wnpECo1lQw43I85NVz+hx9YgPS/2mJpJTf20s4tYXOk9xHKXkdOARVPSw+Uz1iT5zisNW0srlHTdHRWuPELx8RY9/KKM8xNABa6+sUgFaikXIO4uRsfjY+MjTGID2hsOIFgY18xpgnYFeQJ4Rz4kj+kjuOxSJHe6j5QZi8fWY3NlI4HWbg9xHOQYl0Z9SHSx5cif0keJ1L7QN5qSIVw3pG4W1TU7X2It7Nhx6m95ZGa6xsfEH9RMvWqsbar/GRa274ZBrVa1/KvkJ0z34l+pnRWvWdUhYg98ZoPHYfP6zinUk/SeZ1VMQBw/vyg/EJC7AcgBKOJpzUqBKywv6PZnpOkmDsQkolirXE0nruCxIYCJmeBSqhRwCD/YmX9Hs01AC+81tGpcQYvjyzOspfDPzKX7L/oehms9EfSjValUPa5E+9/WHM0oU3Qq+mxHOecY/JaiP+5Dut7gqCSvxt84z0/r2RHBFxFvMh6N5liAoWtScHhcgWI8L7TWK1xeTFmHxrCdeQvVtJBmY4R1b1lI7+8hPZYd35W+X1g5M5dmKLRYMPz9kfA8/hNMrgwbmeBLdpDpYcD+h6iR1RpYnEahdEUX33JNpJiMGVPrKJ0sd2T3WPM/wt38+fWUKmcsh0PTbV1tdT36vvO/atU+yg85ITwWOV9raWHFTxEvB4L/DiooY9l7bEcQf1HdBznEq1ncaOAZbg/G/CSxpWaDMxwiVCGDaHXgwI8iPeHcZWbAu3Gox+P2jP2MOJZiRv7R+8kiq4xk7Ncaejj2W+PI9xgzG5rQHv38N5q30suhwCOBuLg/CBa2U06ZJRF0ncqAPMS8TMPmlO9wrnwBEs4TMkrutN0Kk3s52IIEKvQp2uAo7ja4lPFeqte6gjpxjsSnnmU1iOwEqW97YN89pmsTha6+1bbpvaHqederPt6l6S5hlXEgtTO44+PQiO2fqYxcM7tx3MK4ZCiFKi6gTcNzHgZNmGGqI3/pN4gXB8pGxxDiwpN8dvrNJDVy2kV1qWJ6X4Sm2EXkIRp5XijwUL8Ydw/o/qpjXs9tyIbImQSmvAi0Y9Uo1w1/GaF/RBr+2bRyeiC+8xPxj2iZhn1nqTykNejp4gj4TbUPRmmhBA3Ev1MsQ8VHlDtBjzr1x/sTp6H+yE/KPKdLtFi1HeP1/SNJiaiZwdUgkNRAf6b/T7x7ROMkD4yjaCMQk1FanfaAsbRsbTpxqUcHjGptcTR5d6RM7qnAE2JmWrJI6LlSCOIMcD2nCYNCAbC/nLowy9JlfRnNWdBfjwmsR7i8GKQUl6R8S8S8gUmMdbxxjZJVYlTcSelWDCKwvIBTsbyJuOwaupBEBetNE6XHZ5N9+k0wMr4nDK43EkCtnFMD2h5iJTzOnWOgG5loZDSvfQvlLeHy1EN1UDwEvF4EV1q0hdBrXpzH3lT9pYg+zSb42E1zUwZH6odJDWUJxb+6q+JP6CXctwlYN+8YFegHA+Jh/SOkQyWg2Y5GlTjcHqDYwavojR56m8WM1JMjMNq0Cp+jGHX3F8r/WX8Nl6U/YUC/SW2aQvX7o6tI9FTxEQUF6RjYm3KV6mPtygVs0h0jSkEVs4tyMG1/SEj3TLKmkZRIm09ZjMT6SP0gvEekVQx61N+9VBzlZ8cg5iedVs5qHn85TqY9zzmug16b+006idPMfxjdTOl0Wv//Z",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci quas modi fugit autem recusandae quidem.",
            date: "12/12/2012",
        },
        {
            img: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci quas modi fugit autem recusandae quidem.",
            date: "12/12/2012",
        },
        {
            img: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci quas modi fugit autem recusandae quidem.",
            date: "12/12/2012",
        },
    ];

    render() {
        return (
            <>
                <Navbar select={0} />
                <div className="list__blog">
                    {this.blogs.map((item, index) => {
                        return (
                            <div className="blog">
                                <img src={item.img} width="250" alt="" />
                                <div className="blog__title">{item.title}</div>
                                <span className="blog__date">
                                    <i class="far fa-calendar-alt"></i>{" "}
                                    {item.date}
                                </span>
                                <Link to={`/blog/detail/${item.title}`}>
                                    <button className="view__more">
                                        Xem thêm
                                    </button>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}
export default Blog;
