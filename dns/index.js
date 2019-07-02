const dns = require('dns');

//archive.org
dns.resolve4('www.baidu.com', (err, addresses) => {
    if (err) throw err;

    console.log(`IP 地址: ${JSON.stringify(addresses)}`);

    addresses.forEach((ip) => {
        // 会报错
        dns.reverse(ip, (err, hostnames) => {
            if (err) {
                throw err;
            }
            console.log(`IP 地址 ${ip} 逆向解析到域名: ${JSON.stringify(hostnames)}`);
        });
    });
});