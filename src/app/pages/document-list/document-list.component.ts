import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {

  items = [];

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('文件学习');
    
    this.items.push({
      src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFoBLAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwEEBQYABwj/xAA7EAACAQMCBAQDBgYBAwUAAAABAgMABBESIQUxQVETImFxBjKBI5GhsdHwFDNCUsHhBxWi8SQ0Q2KS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIhEAAwACAwACAgMAAAAAAAAAAAECAxESITFBURMiBFJh/9oADAMBAAIRAxEAPwD5YoqdqEcqPTyruJEimxjJoUFMXYZ5dqZCM83lO3WnpF5FOd+1Aq6zud+lXIfD0qW7U6EbFxx+XHhoTnmadbKwkyook1Mc4IUch0p0Y06WUebPKsJscYn8NTywvmU9KIEqqljjLDl2r0DEllkVcKNznemTo0jRsRtgigKMtkMkuCxG+xzVp42jjLAtkH76p2iO0mV2CEH0rTcBoRvpPP5fpSUuwE2czal3OC2c9tq2GupdA1yHSvesSFHi0jmOe29bDMjwMc/05xU7SbMaHDSpEc6OVf5GVRs3M1v2k7mT7R2cavKD82Nq46yTS5jRiWB1Ka34bsMIy5KyDl9a5cuMvivRvXl3qihn0o2nCkAHHtj33+tMtpvGjZM5zupz936VlDM1oyJkhjkBuh9K9DMI5I2QkqyAjbfNQUaRWr72aRAUsdDAjOw/LNecKygjOG79B2/P7qOSWSWKNwMbYI9elA5VCCgOwBb/ADRTMw1iYOhUYU7ajvg1qW8DKCXPmO+O1ZVvMEcjJMZGRmrhnVAPDYkdM9KldV4Ux8V2HPaa2YtjI7daQLUo2VOPTvR/9SAYZXI5U5Lu3cY1YPZqR3a+A6x0z0Xl2dcdiOVNKBgdsg0AaNgRqTc/NnlVWa/EYKI+cbZoKXXhR1MrsXcReG2ljtzzVKR0U/P+FRNdhs5/M1RmmY8q6ph/JxVa30PlmXG0g+oqlLJ2kH/5akvDLOfIparVl8P31wmu3uY0UHB0udj7YqvGUJ+z8MmcTv8AKP8Atb9KoTWF9JyQn2z+lfQ7LgUkKjx7x5j1yoxWilhGFxgHHpWeaZ8Qyw5H6fGrvhl7Gup4Wx33P+KzpbK8KlhazFRvnwzX1j4h+IeCcDZobhzJdD/4YVyw9zyFfL/iL4rv+LtJFqFvaMdoI9sj/wCx6/lV8V3fx0Co4/JgTMRkVSkamSNVaRt66DIF2quzb0bHNBj0JoDiBRhuVRRadqUcauKJRqCg96jAO3LFTF8xpxB8aqGGOpximoDgagTilRAhlyAd8irloftkMm6sxyP3705Nhxgaco5wOYNWIh5gwz7g8qRkAiPbJGaaqqgyQ2BzK1hGT4IVWIcnPMEVoKmIigYc9gaQFCRh2HY5PrTVKeIdfIjbB7UrYGWoiMKi+bTnOnrTg2FClWC5G1V7dsTNpGMgEaetPLavOGOWII/f3VNij9GJFkBOD1A5VatpWAAB5DDAj7qrwTRs3hPrQMNiB1q/FalWKOMEjyke2edK2YZw61knnCxLpKgZ+/FaEWJBh8nPTHWsaw4vZ2XEXgmvWt30oXJRtIJbABYDG/vWvauyx8uxXI61Bt7Z0OJnHNJ9vZpRGTwiJBjAGCOh604xlo1Y+SNdgegz0pEMojlBYgJJs6sMgH9/lViIsHkGMxN/QN9h2qNGXZe4dcozGCY4D+UH+01ca1K+XAOdgc/veufnURvG0T7N36joafbXb7MrvgHlnlUql/DGnLrqkX50EOT0/Cq5lxsa89w0keGOc8/Wg8MK+jS8hwDgbAe5oyvsWq76CV2LYCk+gGahozq2JUeu5rV4bwx5VD3ACID5VXqP81rx2cMagLGu3pTDzjb9OSEJB+SVs9sCp/gruQBUt2B75rsBDH/Yv3UYUDYAYo89B/D9s5a3+H7iTedwi+laEPw5ar/MaR/rituvUHTY6xyivbWUFsmiKMAU3w1GcKB7UdepWUXXgOkdqx/i6W7t/h28nsJhDNGmvXjcAc8etbOaCRFkUpIoZWGCrDIIrS9NMD7R+a7y4eaR5HYszMWJJzkmqEj9K6b/AJBt+G2fxHcQ8IlDRjeRFHlifqoPX/dcq5r15e5TOPWnoW5pLHtzopHzSS1ZjpAtkGhJomGBnNK3NAZEUa71IiIU9ahCMjG9Kgsc4IcY7V6LrUSPlz2AqYTk0wo9TjScb42q2v2Z0nJ3xntVVN1xnlv+NWlwYyMHPPHemJsZkNLHhRnmfSrkY1ApnG/es6Bi8gY7BedX7LXJKMLnJ225VmI0WgcwlUIOSAQNx7/hRwlVDnOkpzY02HhpDajKBjop3PPnWpbWMIzrTVkYOrkfeo1klGUtmRBKrXOlTgBdxjJ7Air9pb3MmkCByy7Ajy5H1rdtLKKNSIokhAHNV0/iKu+PZ2pH8ROo2B829Qr+R/VFFhMocFuZpVaP7Pod9WP8Vs8O4LNAftZgSDldv91FpxlZRm1jGMnzABhkdBVv/qqa08WJcg7ZPL6Vz1lyMpOKF6ZnFfhm3mMTieRS00evA2Khs4P751oR8HSI6VlkwB1xRrxxJ0LsEVVxlw/lHbflVa7+JbCKXEEZkc9NAVAPf/W1JzyMdxjHyWk+BGftFI+dRvnpnNTaSSxFdbAnkB3FZy8VuryQStGscYGcqOfuOdW1dXjBLNnGc5z/AOKtKrX7EKcp/qadxbi7/qw55HGAD0P+KzAZLa405KFvwNWLS8HigMSABg77Z/Sm8WjZgsg8wHLH3/Sh49M1aa2hH8SGck6VPpyNW7LiMP8AEobxiIhz0rmsTWrOGjOsAfLtvSJHwDqUY9NqbgiX5OPaPqVpeW1yga2mRx6fpVgb18ltpbhXElt4gwfmQ4x9a73gF9fS20S3tvIdXKVRt9aS40dWLNzN2vZqK9kVMuTUVGa9msEmvUOa9mgYmkX15bWNu1xe3EcEK85JGwBQX10baB3RPFlCkpCGwZCBnAr4F8X/ABHxPjt6ZL8lIo2Iht1PkT9T61bFieRk7tSF8e8U4dxT4iuLzhZZoZAMuyFdTYwTg+1cs7UTZO/frQyAKoPOvSmdLRy+vYpjS8gbn6VLN6Uljmg2OiS2o0stg4zUnalE70jZRIZE7tJjPP1psaa5Dq29qTqTxAyro+tMBDEsXxk7YNLH+ma+gjGTk5p1vp1J67GojEbAqrsXJ2wM1ZhtSvJCx9TT7QjFg4wFB5dq0fCeRiQh05AH0ooLXIwX0jljFW1jjjfLBn2wfWg8n0Lo9ZWSk6WDc62ILZVQqzeEB02FUUlPYp2HX8aqX0v2QaS6dRjZM7n6VGnVB0joo57W3Vi00ZHLU4xQP8RwRrptYS7L1XYHtXITmaOFGdgkjbqHkyxU/wBWOg96m2meZP8A1JZ9JyFAVQMcsfrS8F8jdHUScckljDPO5k0nEMeQCT3Y7CsxJ0eZ2naLLH+Vu5bHaqSsQXkkXTGdkCnmeQB6kfvajgS4md3tEDbAGRN8H3PM7fvFFSl4bZrScUu4pFtoJFWHAOLVQCPQnG2OtIe0vGlM17PJChbKpuQx9c86pRSXOoxLKkK5wWLhTzA5nma6K2thcw+ArrrTYy51Yx027n9980LsBJjdMEUSSsvy5UkL6DsOfanWkMKS4lXUq7hBsOear2kn8M4M8avhgGXOGU+4/OrN0YP4hZULoGIOByI/eKZY/sjWRvw00uEcAhtweR/OmyzrG4Cg4C8xsQax5LpYZT4qnQRjWvP/AHXri9DRIHY7nyuOf/mjxE2bkbZTUqjV0x1HarQvfEgkhEpAdcDPNT0INcpDxRoiRGwYLk1D373E3zhEznYUHj2FXou+M8MpRs6s4CjqaaLnzGOUYwcMCN6zZHTHmOp85UdaRc3BeXxC5JO5o/jEPpPDbv4VjihMs8byAgjxkOFPtyHvXV2l7a3aF7S4imQbZjcHFfCmmdFUN5MjIHeog4hNbyeLBNJFJz1IxU1OsDfydEZ+PwffdVezXyfgXx7f2MqR37NeW5OCWbzr9ev1r6Xw7iNtxKzjurOUSRP1HMHsexrnvHUnVjyzXhczUE0svQF6TQ/JDS2KFpKQz0tpMUeJN5BkxWSMxsWAI+ZWKsPYjlXEcf8AgWyvbaRrWWQXXNTK+oMfU8x711jyUh5cfpVYdS+iF5NnwXjvB7ngc+niMTQEnySE6o29mH+qx5Q5OcZ9Qa+08c+MuB8KkkhumS6mUDVAiCTn36V8b4lcQXN5LPbWi2MMraltlk1BfY4G3p0rsjI36gQtopOcDelk1L6cnHehJ3rN7KpHm5UGB1qTvQGsMCVx0p1ssbPiTIHvQaSDvU6c9DUwmtbiKP5UOR2XarSzZXCjB7daxxKyKPMw996F/EbGXJB6g0eSE0zVkuyi7zYPYb0E3FFAwgckb59aojQoPlzjmagBjqAXYd6JtFp+IXrW7MpCqeoO9LhkkuCq6zv82o51GhXPlAUsPvxRJmSYKDjTzx07VtGGyh0bLjJHTtRwltOoyHX1Gfupet3Y5TPvToVmZiyLK3l1HSvL136c6wp6VyyNGqMRjfIP59qs2ctyYBGrhoFJKRsMZPUn/dejgcKJxoAhZdnbUxJNMlYGTxQqoz5yEGAD+lNM7FqteFu1ttWl5MP4Z1HH55znHpWhY3yR3BUjwz/SW5VjxSyRT+YMTjbGMN71ZtZStwyqqMG56uWe+9PxRF7ZozSpDeS6pElRd42Q/Lvn7qtXkdrNaGRQodW064+TDqfrVG4i8LVGqRERr/NH9QPXHMUu3+yYqmI/EU5Ubqx/xQSFLEt0WtESVU1qcFh/V7+tU2nBGlS2gndTSZXcnSMEc9+fKkLl3CqfMaLQNF5nTI8MEZ2yTTflRSpHLoNx71T8IhV82dXTG1SCy+Q41DfAPM1gaNBdDKAudZ68wKMoix6ymrVzxuUP+6CxDMjmSNhGeZIwB9aDXbxSMXuomC4AGrzfTFbQdBwr4semXIG2jPT2qlOWhfwn36hu9WXv+HQj+ZNMMbBFAx7k1Qm4s0kgFvbxJnygsNZ99+tFJhGRl5iFRSX6bV9Q/wCM4JLfg0szSao5pDpAOQSNia534T+EZbrVPx1WNvs0MIyobPPUMDb0r6JCI7eBIYUVI0GFVRgAVz5qWuI8PT2XGlpZlqu0lLaUVzcRnkLDS0p5R3qrJOACScAczXGcc/5BsLJzFZAXTAZL6sIDnptk/SnUNk+brw7aWcKCSwAAzk8hXzb45+N0lh/6fwS4EgcET3CbgL/ap7+tc3xr4s4lx6Lw3kFtbcjFGdn9+9c64C/IcY/GrTj0PMfZDHT050l/NuTg0TDP9WPrQEkHpVC6B5dc0JIqS2QRgfSlkAb1hwjQGoyajNYxbUjqKPy4yaWOVGvzGgYHkeZA7gVJlbJBBIHpTW/lmiG7HP8AbU6RivlSpxv6GoViCOg/tAqyqrqXYfdRMqiRMKN8Z2oz4ASPJGTr255zgAfnUqy6NhhuXP5h+lJvP/fSejU0bEMNjjmKYBbgkMTkANJbsN0Y6c/d6423q5a3U1qpSKWRg4xIpyAQDkDIOcb1m5OXPXA3oXkkGnDt9/pTzKYjNuN5Jo5VdPNoyGA22NVngnSNXeMjzYzjasrxH/vb5e9SXYhAWJHqarono3ltbsuEUArjBJO2O1SIZBmTxIQV2IVwBmsHtUitoGjrZkV4Ele5jdiNO7KD7ZGxqvDNDpg8a5iVs4JLatu5xXOijXlWSBxN25k4dFLiO7MnfRHyPucUMN/wpJQ0sNzKo/tKrWIedRRco2jcm4xa7i34eFQfKJXL4/KhPxBe+E0cfgxB+ZSIZ++saircUbRYa5mfOuV2zzyedHZ2l1xCYRWVvLPIekak49z0qsnz/SvuXBIYoOE2wgiSMNGCQigZ+6luuK6FfRxXB/8AjueTEnF7oQpt9jBux75PT6V2XCvhvgvCWD2tkhmUY8WQl2/Hl9K0jQmuarqvkTY9pe9AZaUaW1T0bY1pqo8S4racOt2mvJ1iQdzufQDrTHr5B8du7fFN4GZiFRQoJ5D0plIYXJ6LnxL8VXXGHkjgkMdgG8qY06h3Y/4rlZsHZmUYHOlv0pLfOKs1o6phLwcvn0jAzz6DaofQrenbPWvT/KKU/IVtjBOwwOvrQOxIGTXpPmHtS25GsMkScY2oCag8lqTzrBBoTz2om50JoBP/2Q==',
      alt: '...',
      title: '党建学习资料—1',
      subject: '内容描述内容描述内容描述'
    });
    for (var i = 0; i < 10; i++) {
      this.items.push(this.items[0])
    }
  }

}
