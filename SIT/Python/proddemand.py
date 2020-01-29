import numpy as np


def calc_prod(coal, oil, elec):
    rates = np.array([[0.9, -0.2, -0.2],
                      [-0.4, 0.8, -0.4],
                      [-0.1, -0.2, 0.8]])
    rates_inv = np.linalg.inv(rates)
    production = np.array([coal, oil, elec])
    return np.dot(rates_inv, production)


def main():
    prod_coal, prod_oil, prod_electricity = calc_prod(50000, 75000, 100000)
    print("Production: Coal-%.0f, Oil-%.0f, Electricity-%.0f" % (prod_coal, prod_oil, prod_electricity))


if __name__ == "__main__":
    main()
