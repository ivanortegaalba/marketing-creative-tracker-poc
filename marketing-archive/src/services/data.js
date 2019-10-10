export default class Data {
    constructor(data) {
        this.raw = data;
        this.dataByCampaign = {};
        this.dataByMediaSource = {};
        this.dataByAgency = {};
        this.dataByDay = {};
        this.totalClicks = 0;
        this.totalInstalls = 0;
        this.totalConversionRate = 0;

        this.raw.forEach(d => {
            const timestamp = Math.round(
                new Date(d.timestamp).getTime() / 1000
            );
            if (!this.dataByCampaign[d.campaign]) {
                this.dataByCampaign[d.campaign] = [];
            }
            this.dataByCampaign[d.campaign].push({
                ...d,
                timestamp
            });
            if (!this.dataByMediaSource[d.media_source]) {
                this.dataByMediaSource[d.media_source] = [];
            }
            this.dataByMediaSource[d.media_source].push({
                ...d,
                timestamp
            });

            this.totalClicks = Number(d.clicks)
                ? this.totalClicks + Number(d.clicks)
                : this.totalClicks;
            this.totalInstalls = Number(d.installs)
                ? this.totalInstalls + Number(d.installs)
                : this.totalInstalls;
            this.totalConversionRate = Number(d.conversion_rate)
                ? this.totalConversionRate + Number(d.conversion_rate)
                : this.totalConversionRate;
        });
    }

    clicks() {
        return this.totalClicks;
    }

    installs() {
        return this.totalInstalls;
    }

    conversionRate() {
        return this.totalConversionRate / this.raw.length;
    }

    clicksByCampaign() {
        return Object.entries(this.dataByCampaign)
            .map(([k, d]) => {
                const dP = {
                    x: k,
                    y: d.reduce((acc, d) => {
                        acc = parseInt(acc + d.clicks);
                        return acc;
                    }, 0)
                };

                return dP;
            })
            .sort((a, b) => {
                return b.y - a.y;
            });
    }

    clicksByMediaSource() {
        return Object.entries(this.dataByMediaSource)
            .map(([k, d]) => {
                const dP = {
                    x: k,
                    y: d.reduce((acc, d) => {
                        acc = parseInt(acc + d.clicks);
                        return acc;
                    }, 0)
                };

                return dP;
            })
            .sort((a, b) => {
                return b.y - a.y;
            });
    }

    byMediaSource() {
        return Object.entries(this.dataByMediaSource).map(([name, d]) => {
            const installs = d.reduce((acc, n) => acc + n.installs, 0);
            const clicks = d.reduce(
                (acc, n) => (Number(n.clicks) ? acc + Number(n.clicks) : acc),
                0
            );
            const conversionRate = d.reduce(
                (acc, n) => acc + n.conversionRate,
                0
            );

            return {
                name,
                installs,
                clicks,
                conversionRate: conversionRate / d.length
            };
        });
    }

    byCampaign() {
        return Object.entries(this.dataByCampaign).map(([name, d]) => {
            const installs = d.reduce((acc, n) => acc + n.installs, 0);
            const clicks = d.reduce(
                (acc, n) => (Number(n.clicks) ? acc + Number(n.clicks) : acc),
                0
            );
            const conversionRate = d.reduce(
                (acc, n) => acc + n.conversionRate,
                0
            );

            return {
                name,
                installs,
                clicks,
                conversionRate: conversionRate / d.length
            };
        });
    }

    byAgency() {
        return Object.entries(this.dataByAgency).map(([name, d]) => {
            const installs = d.reduce((acc, n) => acc + n.installs, 0);
            const clicks = d.reduce(
                (acc, n) => (Number(n.clicks) ? acc + Number(n.clicks) : acc),
                0
            );
            const conversionRate = d.reduce(
                (acc, n) => acc + n.conversionRate,
                0
            );

            return {
                name,
                installs,
                clicks,
                conversionRate: conversionRate / d.length
            };
        });
    }
}
