# Strategy Tearsheet: Portfolio analytics for quants

**QuantStats** Python library that performs portfolio profiling, allowing quants and portfolio managers to understand their performance better by providing them with in-depth analytics and risk metrics.

`Changelog » <./CHANGELOG.rst>`\_\_

## Facebook Stock Performance

![Stock Performance](./docs/snapshot.jpg)

QuantStats is comprised of 3 main modules:

```

1. ``quantstats.stats`` - for calculating various performance metrics, like Sharpe ratio, Win rate, Volatility, etc.
2. ``quantstats.plots`` - for visualizing performance, drawdowns, rolling statistics, monthly returns, etc.
3. ``quantstats.reports`` - for generating metrics reports, batch plotting, and creating tear sheets that can be saved as an HTML file.

Here's an example of a simple tear sheet analyzing a strategy:

Quick Start
===========

.. code:: python

    %matplotlib inline
    import quantstats as qs

    # extend pandas functionality with metrics, etc.
    qs.extend_pandas()

    # fetch the daily returns for a stock
    stock = qs.utils.download_returns('META')

    # show sharpe ratio
    qs.stats.sharpe(stock)

    # or using extend_pandas() :)
    stock.sharpe()

Output:

.. code:: text

    0.8135304438803402


Visualize stock performance
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: python

    qs.plots.snapshot(stock, title='Facebook Performance', show=True)

    # can also be called via:
    # stock.plot_snapshot(title='Facebook Performance', show=True)

Output:

.. image:: https://github.com/ranaroussi/quantstats/blob/main/docs/snapshot.jpg?raw=true
    :alt: Snapshot plot


Creating a report
~~~~~~~~~~~~~~~~~

You can create 7 different report tearsheets:

1. ``qs.reports.metrics(mode='basic|full", ...)`` - shows basic/full metrics
2. ``qs.reports.plots(mode='basic|full", ...)`` - shows basic/full plots
3. ``qs.reports.basic(...)`` - shows basic metrics and plots
4. ``qs.reports.full(...)`` - shows full metrics and plots
5. ``qs.reports.html(...)`` - generates a complete report as html

Let' create an html tearsheet

.. code:: python

    (benchmark can be a pandas Series or ticker)
    qs.reports.html(stock, "SPY")

Output will generate something like this:

.. image:: https://github.com/ranaroussi/quantstats/blob/main/docs/report.jpg?raw=true
    :alt: HTML tearsheet

(`view original html file <https://rawcdn.githack.com/ranaroussi/quantstats/main/docs/tearsheet.html>`_)

To view a complete list of available methods, run
```

## Strategy Tearsheet(Generated)

![Strategy Tearsheet](./docs/report.jpg)

## Code:: python

    [f for f in dir(qs.stats) if f[0] != '_']

## Code:: text

    ['avg_loss',
     'avg_return',
     'avg_win',
     'best',
     'cagr',
     'calmar',
     'common_sense_ratio',
     'comp',
     'compare',
     'compsum',
     'conditional_value_at_risk',
     'consecutive_losses',
     'consecutive_wins',
     'cpc_index',
     'cvar',
     'drawdown_details',
     'expected_return',
     'expected_shortfall',
     'exposure',
     'gain_to_pain_ratio',
     'geometric_mean',
     'ghpr',
     'greeks',
     'implied_volatility',
     'information_ratio',
     'kelly_criterion',
     'kurtosis',
     'max_drawdown',
     'monthly_returns',
     'outlier_loss_ratio',
     'outlier_win_ratio',
     'outliers',
     'payoff_ratio',
     'profit_factor',
     'profit_ratio',
     'r2',
     'r_squared',
     'rar',
     'recovery_factor',
     'remove_outliers',
     'risk_of_ruin',
     'risk_return_ratio',
     'rolling_greeks',
     'ror',
     'sharpe',
     'skew',
     'sortino',
     'adjusted_sortino',
     'tail_ratio',
     'to_drawdown_series',
     'ulcer_index',
     'ulcer_performance_index',
     'upi',
     'utils',
     'value_at_risk',
     'var',
     'volatility',
     'win_loss_ratio',
     'win_rate',
     'worst']

## Code:: python

    [f for f in dir(qs.plots) if f[0] != '_']

## Code:: text

    ['daily_returns',
     'distribution',
     'drawdown',
     'drawdowns_periods',
     'earnings',
     'histogram',
     'log_returns',
     'monthly_heatmap',
     'returns',
     'rolling_beta',
     'rolling_sharpe',
     'rolling_sortino',
     'rolling_volatility',
     'snapshot',
     'yearly_returns']

## Installation

Install using `pip`:

.. code:: bash

    $ pip install quantstats --upgrade --no-cache-dir

Install using `conda`:

.. code:: bash

    $ conda install -c ranaroussi quantstats

## Requirements

- [Python](https://www.python.org) >= 3.5+
- [pandas](https://github.com/pydata/pandas) (tested to work with >= 0.24.0)
- [numpy](http://www.numpy.org) >= 1.15.0
- [scipy](https://www.scipy.org) >= 1.2.0
- [matplotlib](https://matplotlib.org) >= 3.0.0
- [seaborn](https://seaborn.pydata.org) >= 0.9.0
- [tabulate](https://bitbucket.org/astanin/python-tabulate) >= 0.8.0
- [yfinance](https://github.com/ranaroussi/yfinance) >= 0.1.38
- [plotly](https://plot.ly/) >= 3.4.1 (optional, for using `plots.to_plotly()`)
