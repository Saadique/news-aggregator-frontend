import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

export default function NewsCardMUI(props) {

    const imageSrc = props.news.image_url ? props.news.image_url : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAkFBMVEXq7/EEBQb///8AAAASEhLv9Pbx9vjz+PprbGyvr691dXUODg7a3+Gjp6gaGxro7e/N0dN3enuprK7h5uhAQUG9wcNKS0yLjo/Fycu1ubpWWFl9f4Ccn6DS19lgYmMwMDE2NzeFiIlNTk8iIySJjI5UVlY5OjoqKiuWlpbLzMzh4eGgoKBeX18YGBi7u7tub2+3GN/CAAAP7ElEQVR4nO2diXqiOhSAwZhEBYuKGxVU6lhtp63v/3Y3G5tsAaKO6T33zldERM5vlrMRDLOTgMsaQ+MXSjdsJgCnsYEerQQVeNefryM2Cg6cnceCgwgjdzF27/iVnbExcKsHgnOC4Z+vA7kI+45fqgAbA+fft5Mkgrbk24HV7z8fNgru4OHbXiksFgO7r6Dff05sFNybfVNw4xmR8Zj9SbbGtoGnT4yNgvuDbtdTXdoXwcAPARBbK/Z3AdFzYyPgDpObNTibsAFLjAPGqA9mGK/oLu/5sZEGF95qaiC4LOAacCKwjaGBloDg0wAbAbcPbmKLUFykQ2awkY5rkb86YCMNbnaLjgrXpCVjI4sNedTySWGD2HBtNzXCEkuYiPohVzk2wm10g/YGF2BJT5vBZuBNGhsyxkc6S7x74gIgmpy38/fjZqbaHC/VPS1Nwb27yn9e6AHmPGWxGfAUogibO+N2b98kAx59Ey/eAfieTL6pA6i2C5QRO47Ow5+PSfAZTD52IHlPssEpH+DgesE5XWELkinhCL62wKSbFqDv4ZC8AgEkXZns2Srllke2mw6DXkbmESzwtpRrfQAo9xnEDH2FjewwImwrMooZO4ttE8aEGtn4ouNhn/peZ5W/ZJbZYbNAvZwsY2xerxf8PUqQA2B8Gwsuh82Isa3pJDHm28RFXtMtMCQ78RegLdBReBkpZrvzZ47YZLwZfPVjbEO+92dbCw6QH1/hZcZSg40MgWz7jPDcjKwS9IcRnCkccGNoYZ7Zens1JYBz/N5wWUeO2QvKRRLbCrPjLJNeA/QZtovC6+HQ5j/5rukdcmAASLH93NSAA5sbcJPGdqYb5pJhYzvNvVJsAGyDPLTP9yIm4CVz0N9qcLdob9LYBqyFDegVoAVreZbCwQ2AQb539nrjEh5gkD1uVgnuBuObLLbekg1t0x7xGwIxTyiMmr8VQeuNSllEs0IacDk44Cu3Q2SxMUvE6qetdoXYiqD1vipAgBznVRW3oWK7VxrbnvkLS8dNROFlFFHbVg5Yp9zxzmspOMCUUSjSY9uRjWcvN4r/FVDb1BgWo/xHfiq42Uq5SWMbVYxnSUywbXQwj2BY6wEUWCt4WwYO7NpdWIlIYxPTwJWNCyHChu2Jvciejdt5zzkAnxKOk1PQRoel3Bo60UQx6Li2y7LGucYgiw3ZbMPcZb7c+RhvlhaZHdheRKczELbhllP/JOGo7wqw9T7NMm5NplNkeJu5mPn223NuZJTGRtq/aHfig8iBM+byWGLII6ey2jpd18qfZUJDYFPEDe/KuE1kLwy51PUAB8/A2OabV8hhnIKJG0kxNsMGPBgSQky75mQ5IwMZc7MENhTyY5ctpo0r1V3JgNqiiFuvhBv4lrwY7NM4o7k3eJRxb+amQojOAtvWjbhFedIJopFJ4cpjGg9mwTcARv74z5zFnAV0gY1/rpXTdaX4q2wcstByuZQ1NzkvGm15r7GT0JrVz35y9pJYryGfJd2peH3wSGuK4tKhY6DJiUV7LbaDB7LS2KCYNaYtBres3hPZ+DeYF2EblJohnkQ3ZWExokYcAcAhsKwMNnf5tY3ljcV7ob985XJ8dyfzo3gxH0Iybc7eOMTTSrTNNDYD0vgr+G5jBmf1nstiI256I2wSMcK4+wXJvoNpZpsCTotolMmO9Ps8Zo6dYLFY2zA6SwabYaze95tWeY+M2h8Nki3gowE2mW7KLYa+lTIZyPAEUsm7lH4wvZuX0FwJ35O8R6YFIlfYUCYbWHgm8jnxC8Q/1DW2YxNsADbAZtY6WfgiGtsm1b7wAIhLx8hejLkeZNtZjydi21nPfH88XLuxTvRoGMxIF0buUBQLImPhh5s/s3Wmk/IDmQEC6RfQM3kTIzoT/yb/4kOIg/NgufzyHZjH9tkosweWjbCdagZeh1O7MqNc0rshgbRhg5RD50JRBOjTwxabPQDDGZsU5jytTZFOqeV3QfgMuE8M+bSxDy/cKGHYkLvwR/RAOpO6s8E3ePPGLMW05ZUstnfe0m8Cl956zuI85J+dx1bjjOZIrBpgM2syR8QUFdiyzRJTU4wbqX2KsB8VAY5ZYQMgzRhBTD9sgjeDBcDp0eSAEaZGGj0dWtOPEG8F8VA5w4ZG4kBzTl7Q6qUDaX7USLZ4HgRNRdoVXJgFya9ujnLYmuaRc8NbJbbqcBcaRdhypRzQDsU1O7R+YW9FXgKrC2FeAHph+o1ods+I7AqH4V1D7g3wzFVqbEOTAbfbKDYyHTGjXDghbOantjf/3qO3XrxlJqyU0l7j7DvA8thMMK2aFXiiqThmAZ0EG61fSGEDb+ykke1CkUeab3jihbS2Aw/04iw22ghT2CIXkOf150kOom8ue3SmeLFioBlsTSYEQeLYAJtZXRLUt/oJmytxU9hQFpsY8TdJI+EJUuJULYmTYYE19pP3subuIo3tlVPD35yOkcZG3+LJicgXTnSGjWs9CIm/TbANKppbNCPwOgRpbAsRAfqT6CSwmV9sFCTYTlbS+cuxiUaePjqDLfJ8r7HVxtkKUQTy2My0IVuDjc795H/6H0KwBJsRROENtIqS8TE2MtJ5tmM4ESluAJZggzPB38CiGiKQxSbpjl6RsJpgq2huETbOBvr7ZSTzk12GzYgm3QJsxGzmZupMvEQV2BLzuTG2Fn2UoviSx1Y1uiXYWG9xL9HlAHAu66RG1DCxOy3AJvpvmNK9FFt8JvvUDNu6FbXs8FaLrWIy/Y6mBI4WT/gcYb45qAIbxO7i/PryLtpIETaRVDjWYIPYHobzw1xchSy2sC22VAawFlu57ZYYIGIAjMZmmtkvxYY9Wv7kIV66UIxtIIMNGv4OgFOAeg076aElNhN8S2MzgV/mKoirSrwEJLBRF7UUG5ktWUiycGwT57lIYIPBgfoRxOBtOLYZbanRHIs8tlLPFA4jbENpbIjdNUQ1rMImYrjzqinBpV6WRQPwDbEt2mNLChxqsZmRoZWX2JUXvms9NqE2tViqsPH+ax0qDBB+TtYgG2JrO7QxFtHwJoGt1AaJA0fiiHps0RasxCZ053Z/CTZ4YC7ttjk2+bhuEYyDNLbyMG8UpjRlsUWOaHVri87Lx8wSbPzTr82xdaFGg7eS2MzyrCTyhX48PZjG5oDEUUxhE5nQ6rHNwEuewAqvXflrbNapMbZmEcoCGkNZbG+lppvopsK4S2OLdKEprSQCEuU5fWzgCmxCeQu4xIu1i8e2iFXTmfSnKzY2vMlgqwi7ESKmuPostshTv0CMhqLljXHEB3juZM9bFLVvROAoyUkgHiozdwvX5rpb372Uz0+wCU/ifeJ6ICYoqjCJxY2N1M+FU9hWHbGZYM/ynBIHVtQO4AWxOS3zYFM/fsdTnCy14Fr8mq09mIqZ0ZwGYnCjedAZj8OObAO6F3FA7H65p/i4CwtyWmB/dqHNO7nVHyKXB2/Jj7oU7XbskqYpzv/tIYKQN0NzycYQga2iEFCWm+RdRpWVNBB6rDp9cF6xv4eLx6YQGOxEWciix+++7b9/EUtFlLLvA+yLtPLQTvLPUZUCdAZij987sb/f822wTg78wgHfDwYGjMrj7dQBAxwmL2jgTmDrd8YmK+kUXhE4bExm581ltDnP1nacjSNGWngZndeYboy9wEUs+4bXq8totSBHIXscblaeixw7kaQZB/70shk6CE2nPvs0MjIHkt9rc5n6AZ0UJv5m4y9Is00fkHrhJq3tbtQkUn88o4lQNmPJdrJgUfqNeC/fLD9z9O71aXMH8O+vKxdUM5E2wrb6J1ap6SYcW9uoUStsbQqj/jXh2MZ3xGYWZQueTbp7pM2xKS4ef4RwbDIGlzpsvi7YlnfFVpX4exLh2L7vim2nC7Z2WavW3B6tdHdh1PBdqTWoHP9n5e7WrilZyftvC8MW3Bmb0kUSHiIMW5OaXRXYbrEszX1FSZCyKbbj00+lDFurYqMO2HZ6tLa/d8ZWHXJ7BmHYpO5PU8nt0Vp3lsdgu+fKwjcRNQmYptgqyiqfQ+4fNzJ1CB0xbNP/sTUUhq18tZQbYSutO3oW+R9bK/kfWyv5H1srkcEGmsuvwFY9k4LBqKm81fwOesyk1TeSFtymXCc1Nwtqgq3a3G2BrSakoomXUO1cgVXh0nhVUuOtaeKT1rjyABwK1pYtl79W3ZTwaK07C9ezfhEt8C1Jzq1bIFWfeJtM5QyB8bIqWoEsIx+vEjWVukR3JYPiAMyqodHSW5nzaJJLkL1zKLcM6pVIVuDokrmSTfjVYZMosGen0SRPKpuVV4VNk6y8c2dsmtSAyBaKq8L2aKW7i8Amqa8SbPrUt0ksf6oQmzbVlJLr9CjCpk3tbtlanLfB9vRhowibZFpeEbZH66xAuL6y3pUKbBrdBSPpJqjBps89V7KLOyvBpsHQ1uzGSBXYNAi2GTG2slXUb4BN7cP0HiRNupcabCofbvYwEQr798Km9Pk/jxOhsFygUgW28nVAnkmEwnKhIxXYtOijyWI9UrZDZ2wyS9k/g0QaSy0EogCbBtEPKpHGUnOCAmxPX2vEJdJY6rkcnbHVrmP/LBKrLDO4dcdWujblk0mssszt8l2xaWK0GSlsMoNbZ2yVi9g/k8Qqy9yK2xlb5Rr2zySJzmXPklOHTRfrw0hjkygX74rt6YsoY0l0lojwdsOmUWNLP51DojCtGzZtRrYMtvpe2gmbPtOokcFW7yh0waaPzUYlrXXtIvadsD1/UVtK0lrXVz63x6aNN8olrTWuLfHugE2HNF8iGbXrnkbXHpvkg12fRjJq14XGW2PTJagbS1bvujskW2N7/mrdrGT1NqpHt7bYdOuiuUdW19y01g6b9JO+n0euNa9sbnXYSh7MpkFl+LVca1653nMNtpKRMXqEpU4i29HqscGSsLoetTJXklf/pcJmrcD2UdK9we7RKt5C8vp/lg9vFdimZdTYA1y0kwIC5WU0pdjWZfcrA82cqkiKIJQWQJdgo4/SK/2EVh58LIWrLgzLelwhtlVFr9ZwEmUCzkUkSsb3Imzjiru8wUpTasSbunrsNBdnXwQjj21oVdjH/EFmWgpbO6Bo6QC/oBVdY/trVjkVYKMtNYPpB8D2I8cNhrk1njLYnLB6EQaN2xrHxsAVrZDyM8iuj5XCtqhZuQLoO65RSekJ9gXknI+fn/imhQhbULtEChDPutNVsroCcBnm0c0z2D5CS2JdGU9rakZOXyKvq5/PtD0X++gg/HusX9SOniXQ08qNpVBpJofjZRquVqtwkzj3EsjoUXNXS48qJRUtRnbJxNwHn39RmVppRESO2kzvYY2Jcmp73Yc1JoqhgbDuEZV6iFpqh8kv6KBUVEIDfyqeq6qXKIT2Zv+SpmYow0bMPM39gqwoggb83zEVRKIG2sr5DVZHSlRAO/82aJ2xAXAaG78OWlds4LLGv2pME/Iffbk/8ltJW64AAAAASUVORK5CYII=";

    const handleNewsCardClick = () => {
        window.open(props.news.url, '_blank')
    }
    return (
        <Card sx={{ maxWidth: 309, height: 440, maxHeight:440 }}>
            <CardActionArea onClick={handleNewsCardClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageSrc}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom component="div">
                        {props.news.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.news.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <h3>{props.news.published_at.split('T', 1)[0]}</h3>
            </CardActions>
        </Card>
    );
}